import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { Publication } from './entities/publication.entity';
import { CreatePublicationDto } from './dto/create-publication.dto';

describe('PublicationsService', () => {
  let publicationsService: PublicationsService;
  let publicationRepository: Repository<Publication>;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    preload: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PublicationsService,
        {
          provide: getRepositoryToken(Publication),
          useValue: mockRepository,
        },
      ],
    }).compile();

    publicationsService = module.get<PublicationsService>(PublicationsService);
    publicationRepository = module.get<Repository<Publication>>(
      getRepositoryToken(Publication),
    );
  });

  it('should be defined', () => {
    expect(publicationsService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of publications', async () => {
      const publications = [
        { id: '1', user: 'user_id_1', content: 'Content 1' },
        { id: '2', user: 'user_id_2', content: 'Content 2' },
      ];
      mockRepository.find.mockReturnValue(publications);

      const result = await publicationsService.findAll();

      expect(result.results).toEqual(publications.length);
      expect(result.publication).toEqual(publications);
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });
});
