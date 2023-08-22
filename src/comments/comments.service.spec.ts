import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentsService } from '../../src/comments/comments.service';
import { Comment } from '../../src/comments/entities/comment.entity';
import { CreateCommentDto } from '../../src/comments/dto/create-comment.dto';

describe('CommentsService', () => {
  let commentsService: CommentsService;
  let commentRepository: Repository<Comment>;

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

    commentsService = module.get<CommentsService>(CommentsService);
    commentRepository = module.get<Repository<Comment>>(
      getRepositoryToken(Comment),
    );
  });

  it('should be defined', () => {
    expect(commentsService).toBeDefined();
  });

  it('should create a comment', async () => {
    const createCommentDto: CreateCommentDto = {
      publication: 'd02aaf3e-dbd7-4496-8c1a-0e3988df8e17',
      user: 'df9342c5-134b-4d43-af17-7aa56b5c6273',
      content: 'This is a test comment.',
    };

    const savedComment = new Comment();
    jest.spyOn(commentRepository, 'create').mockReturnValue(savedComment);
    jest.spyOn(commentRepository, 'save').mockResolvedValue(savedComment);

    const result = await commentsService.create(createCommentDto);

    expect(result).toEqual(savedComment);
  });
});
