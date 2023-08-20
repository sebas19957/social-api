import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
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

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  // describe('create', () => {
  //   it('should create a new user', async () => {
  //     const createUserDto = {
  //       nombre: 'Sebastian Mosquera Valencia',
  //       correo: 'smosquera547@soyudemedellin.edu.com',
  //       edad: '27',
  //       ciudad: 'Medellín - Colombia',
  //       genero: 'masculino',
  //     };

  //     const saveSpy = jest
  //       .spyOn(userRepository, 'save')
  //       .mockResolvedValueOnce(createUserDto as User);

  //     const result = await service.create(createUserDto);

  //     expect(saveSpy).toHaveBeenCalledWith(createUserDto);
  //     expect(result).toEqual(createUserDto);
  //   });
  // });

  // describe('findOne', () => {
  //   it('should find a user by id', async () => {
  //     const userId = '3d5b854c-a685-4e18-ac82-e77fb22de3d0';
  //     const user = {
  //       id: userId,
  //       nombre: 'Sebastian Mosquera Valencia',
  //       correo: 'smosquera547@soyudemedellin.edu.com',
  //       edad: '27',
  //       ciudad: 'Medellín - Colombia',
  //       genero: 'masculino',
  //     };

  //     const findOneSpy = jest
  //       .spyOn(userRepository, 'findOne')
  //       .mockResolvedValueOnce(user as User);

  //     const result = await service.findOne(userId);

  //     expect(findOneSpy).toHaveBeenCalledWith({ id: userId });
  //     expect(result).toEqual(user);
  //   });

  //   it('should throw NotFoundException if user is not found', async () => {
  //     const userId = '3d5b854c-a685-4e18-ac82-e77fb22de3d0';

  //     jest.spyOn(userRepository, 'findOne').mockResolvedValueOnce(undefined);

  //     await expect(service.findOne(userId)).rejects.toThrowError(
  //       NotFoundException,
  //     );
  //   });
  // });
});
