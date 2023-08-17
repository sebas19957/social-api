import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      const comment = this.commentRepository.create(createCommentDto);
      await this.commentRepository.save(comment);

      return comment;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const comment = await this.commentRepository.find();
    return {
      results: comment.length,
      comment,
    };
  }

  async findOne(id: string) {
    const user = await this.commentRepository.findOneBy({
      id,
    });

    if (!user) {
      throw new NotFoundException(`No exite ningún usuario con el id ${id}`);
    }
    return user;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);

    const user = await this.commentRepository.preload({
      id,
      ...updateCommentDto,
    });

    await this.commentRepository.save(user);

    return user;
  }

  remove(id: string) {
    return `This action removes a #${id} comment`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Error no controlado, revisar los server logs',
    );
  }

  async deleteAllUsers() {
    const query = this.commentRepository.createQueryBuilder('comment');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
