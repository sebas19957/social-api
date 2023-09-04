import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

describe('CommentsService', () => {
  let service: CommentsService;
  let repo: Repository<Comment>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: getRepositoryToken(Comment),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
    repo = module.get<Repository<Comment>>(getRepositoryToken(Comment));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a comment', async () => {
      const dto: CreateCommentDto = {
        publication: 'publication-id',
        user: 'user-id',
        content: 'test content',
      };

      const comment = new Comment();
      comment.id = 'comment-id';
      comment.content = dto.content;

      jest.spyOn(repo, 'create').mockReturnValue(comment);
      jest.spyOn(repo, 'save').mockResolvedValue(comment);

      expect(await service.create(dto)).toEqual(comment);
    });
  });

  describe('findAll', () => {
    it('should return all comments', async () => {
      const comments = [new Comment()];

      jest.spyOn(repo, 'find').mockResolvedValue(comments);

      expect(await service.findAll()).toEqual({
        results: comments.length,
        comments,
      });
    });
  });

  describe('findOne', () => {
    it('should return a comment by id', async () => {
      const comment = new Comment();
      comment.id = '5b8a9122-744e-4423-8004-4a486ba37813';

      jest.spyOn(repo, 'findOne').mockResolvedValue(comment);

      expect(await service.findOne(comment.id)).toEqual(comment);
    });

    it('should throw an error if comment is not found', async () => {
      jest.spyOn(repo, 'findOne').mockResolvedValue(undefined);

      await expect(service.findOne('comment-id')).rejects.toThrow();
    });
  });

  describe('update', () => {
    it('should update a comment by id', async () => {
      const dto: UpdateCommentDto = {
        content: 'updated content',
      };

      const comment = new Comment();
      comment.id = 'comment-id';
      comment.content = dto.content;

      jest.spyOn(service, 'findOne').mockResolvedValue(comment);
      jest.spyOn(repo, 'preload').mockResolvedValue(comment);
      jest.spyOn(repo, 'save').mockResolvedValue(comment);

      expect(await service.update(comment.id, dto)).toEqual(comment);
    });
  });

  describe('remove', () => {
    it('should remove a comment by id', async () => {
      jest.spyOn(repo, 'delete').mockResolvedValue(undefined);

      expect(await service.remove('comment-id')).toEqual({
        success: true,
        message: 'Comentario eliminado exitosamente.',
      });
    });
  });
});
