import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        nombre: 'Test User',
        correo: 'test@example.com',
        edad: 25,
        ciudad: 'Test City',
        genero: 'masculino',
      };

      const user = new User();
      jest.spyOn(userRepository, 'create').mockReturnValue(user);
      jest.spyOn(userRepository, 'save').mockResolvedValue(user);

      const result = await usersService.create(createUserDto);

      expect(result).toEqual(user);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [new User(), new User()];
      jest.spyOn(userRepository, 'find').mockResolvedValue(users);

      const result = await usersService.findAll();

      expect(result.users).toEqual(users);
      expect(result.results).toBe(users.length);
    });
  });

  describe('findOne', () => {
    it('should return a user by ID', async () => {
      const userId = 'df9342c5-134b-4d43-af17-7aa56b5c6273';
      const user = new User();
      // jest.spyOn(userRepository, 'findOne').mockResolvedValue(user); //para que falle el test
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(user);

      const result = await usersService.findOne(userId);

      expect(result).toEqual(user);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const userId = 'df9342c5-134b-4d43-af17-7aa56b5c6273';
      // jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined); //para que falle el test
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(undefined);

      await expect(usersService.findOne(userId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
