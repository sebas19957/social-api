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
import { plainToClass } from 'class-transformer';

@Injectable()
export class CommentsService {
  private readonly logger = new Logger('UsersService');

  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      const commentConverted = plainToClass(Comment, createCommentDto);
      const comment = this.commentRepository.create(commentConverted);
      await this.commentRepository.save(comment);

      return comment;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const comments = await this.commentRepository.find();
    return {
      results: comments.length,
      comments,
    };
  }

  async findOne(id: string) {
    const comment = await this.commentRepository.findOne({
      where: {
        id,
      },
    });

    if (!comment) {
      throw new NotFoundException(`No exite ningún comentario con el id ${id}`);
    }
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);

    const commentConverted = plainToClass(Comment, updateCommentDto);
    const comment = await this.commentRepository.preload({
      id,
      ...commentConverted,
    });

    await this.commentRepository.save(comment);

    return comment;
  }

  async remove(id: string) {
    try {
      await this.commentRepository.delete(id);
      return {
        success: true,
        message: 'Comentario eliminado exitosamente.',
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
    const query = this.commentRepository.createQueryBuilder('comment');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
