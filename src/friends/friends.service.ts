import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';

import { Friend } from './entities/friend.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class FriendsService {
  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(Friend)
    private readonly friendRepository: Repository<Friend>,
  ) {}

  async create(createFriendDto: CreateFriendDto) {
    try {
      // const friend = this.friendRepository.create(createFriendDto);
      const friend = plainToClass(Friend, createFriendDto);
      await this.friendRepository.save(friend);

      return friend;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const firends = await this.friendRepository.find();
    return {
      results: firends.length,
      firends,
    };
  }

  async findOne(id: string) {
    const friend = await this.friendRepository.findOneBy({
      id,
    });

    if (!friend) {
      throw new NotFoundException(`No exite ningúna amistad con el id ${id}`);
    }
    return friend;
  }

  async update(id: string, updateFriendDto: UpdateFriendDto) {
    await this.findOne(id);

    const friendConverted = plainToClass(Friend, updateFriendDto);

    const friend = await this.friendRepository.preload({
      id,
      ...friendConverted,
    });

    await this.friendRepository.save(friend);

    return friend;
  }

  async remove(id: string) {
    try {
      await this.friendRepository.delete(id);
      return {
        success: true,
        message: 'Amistad eliminada exitosamente.',
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Error no controlado, revisar los server logs',
    );
  }

  async deleteAllUsers() {
    const query = this.friendRepository.createQueryBuilder('friend');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
