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
import { plainToClass } from 'class-transformer';

@Injectable()
export class PublicationsService {
  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(Publication)
    private readonly publicationRepository: Repository<Publication>,
  ) {}

  async create(createPublicationDto: CreatePublicationDto) {
    try {
      const publicationConverted = plainToClass(
        Publication,
        createPublicationDto,
      );
      const publication =
        this.publicationRepository.create(publicationConverted);
      await this.publicationRepository.save(publication);

      return publication;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const publication = await this.publicationRepository.find();
    return {
      results: publication.length,
      publication,
    };
  }

  async findOne(id: string) {
    const publication = await this.publicationRepository.findOneBy({
      id,
    });

    if (!publication) {
      throw new NotFoundException(
        `No exite ningúna publicación con el id ${id}`,
      );
    }
    return publication;
  }

  async update(id: string, updatePublicationDto: UpdatePublicationDto) {
    await this.findOne(id);

    const publicationConverted = plainToClass(
      Publication,
      updatePublicationDto,
    );
    const publication = await this.publicationRepository.preload({
      id,
      ...publicationConverted,
    });

    await this.publicationRepository.save(publication);

    return publication;
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
