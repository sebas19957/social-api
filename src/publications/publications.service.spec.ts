import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PublicationsService } from './publications.service';
import { Publication } from './entities/publication.entity';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';

describe('PublicationsService', () => {
  let service: PublicationsService;
  let repo: Repository<Publication>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PublicationsService,
        {
          provide: getRepositoryToken(Publication),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PublicationsService>(PublicationsService);
    repo = module.get<Repository<Publication>>(getRepositoryToken(Publication));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a publication', async () => {
      const publication = new Publication();
      publication.content = 'test content';

      const createPublicationDto: CreatePublicationDto = {
        user: 'test user',
        content: 'test content',
      };

      jest.spyOn(repo, 'create').mockReturnValue(publication);
      jest.spyOn(repo, 'save').mockResolvedValue(publication);

      expect(await service.create(createPublicationDto)).toEqual(publication);
    });
  });

  describe('findAll', () => {
    it('should return all publications', async () => {
      const publications = [new Publication(), new Publication()];

      jest.spyOn(repo, 'find').mockResolvedValue(publications);

      expect(await service.findAll()).toEqual({
        results: publications.length,
        publication: publications,
      });
    });
  });

  describe('findOne', () => {
    it('should return a publication by id', async () => {
      const publication = new Publication();
      publication.id = 'test id';

      jest.spyOn(repo, 'findOneBy').mockResolvedValue(publication);

      expect(await service.findOne('test id')).toEqual(publication);
    });

    it('should throw an error if the publication is not found', async () => {
      jest.spyOn(repo, 'findOneBy').mockResolvedValue(undefined);

      await expect(service.findOne('test id')).rejects.toThrow(
        `No exite ningúna publicación con el id test id`,
      );
    });
  });

  describe('update', () => {
    it('should update a publication by id', async () => {
      const publication = new Publication();
      publication.id = 'test id';
      publication.content = 'test content';

      const updatePublicationDto: UpdatePublicationDto = {
        content: 'updated content',
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(publication);
      jest.spyOn(repo, 'preload').mockResolvedValue(publication);
      jest.spyOn(repo, 'save').mockResolvedValue(publication);

      expect(await service.update('test id', updatePublicationDto)).toEqual(
        publication,
      );
    });
  });

  describe('remove', () => {
    it('should remove a publication by id', async () => {
      jest.spyOn(repo, 'delete').mockResolvedValue(undefined);

      expect(await service.remove('test id')).toEqual({
        success: true,
        message: 'Publicación eliminada exitosamente.',
      });
    });
  });
});
