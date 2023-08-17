import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

import { Publication } from './entities/publication.entity';

@Injectable()
export class PublicationsService {
  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>,
  ) {}

  async create(createPublicationDto: CreatePublicationDto) {
    try {
      const publication =
        this.publicationRepository.create(createPublicationDto);
      await this.publicationRepository.save(publication);

      return publication;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const users = await this.publicationRepository.find();
    return {
      results: users.length,
      users,
    };
  }

  async findOne(id: string) {
    const user = await this.publicationRepository.findOneBy({
      id,
    });

    if (!user) {
      throw new NotFoundException(
        `No exite ningúna publicación con el id ${id}`,
      );
    }
    return user;
  }

  async update(id: string, updatePublicationDto: UpdatePublicationDto) {
    await this.findOne(id);

    const user = await this.publicationRepository.preload({
      id,
      ...updatePublicationDto,
    });

    await this.publicationRepository.save(user);

    return user;
  }

  async remove(id: string) {
    try {
      await this.publicationRepository.delete(id);
      return {
        success: true,
        message: 'Publicación eliminada exitosamente.',
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
    const query = this.publicationRepository.createQueryBuilder('publication');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
