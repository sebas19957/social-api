import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FriendsService } from './friends.service';
import { Friend } from './entities/friend.entity';
import { NotFoundException } from '@nestjs/common';

describe('FriendsService', () => {
  let service: FriendsService;
  let friendRepository: Repository<Friend>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FriendsService,
        {
          provide: getRepositoryToken(Friend),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<FriendsService>(FriendsService);
    friendRepository = module.get<Repository<Friend>>(
      getRepositoryToken(Friend),
    );
  });

  describe('create', () => {
    it('should create a new friend', async () => {
      const createFriendDto = {
        user: 'user-id',
        friend: 'friend-id',
      };

      const saveSpy = jest
        .spyOn(friendRepository, 'save')
        .mockResolvedValueOnce(createFriendDto as any);

      const result = await service.create(createFriendDto);

      expect(saveSpy).toHaveBeenCalledWith(createFriendDto);
      expect(result).toEqual(createFriendDto);
    });

    it('should handle database exceptions', async () => {
      const createFriendDto = {
        user: 'user-id',
        friend: 'friend-id',
      };

      const saveSpy = jest
        .spyOn(friendRepository, 'save')
        .mockRejectedValueOnce(new Error('Database error'));

      await expect(service.create(createFriendDto)).rejects.toThrowError(
        'Error no controlado, revisar los server logs',
      );
      expect(saveSpy).toHaveBeenCalledWith(createFriendDto);
    });
  });

  describe('findAll', () => {
    it('should return all friends', async () => {
      const friends = [
        { id: '1', user: 'user-id', friend: 'friend-id' },
        { id: '2', user: 'user-id', friend: 'friend-id' },
      ];

      const findSpy = jest
        .spyOn(friendRepository, 'find')
        .mockResolvedValueOnce(friends as any);

      const result = await service.findAll();

      expect(findSpy).toHaveBeenCalled();
      expect(result).toEqual({
        results: friends.length,
        friends,
      });
    });
  });

  describe('findOne', () => {
    it('should return a friend by id', async () => {
      const friend = { id: '1', user: 'user-id', friend: 'friend-id' };

      const findOneSpy = jest
        .spyOn(friendRepository, 'findOne')
        .mockResolvedValueOnce(friend as any);

      const result = await service.findOne('1');

      expect(findOneSpy).toHaveBeenCalledWith({ where: { id: '1' } });
      expect(result).toEqual(friend);
    });

    it('should throw NotFoundException if friend is not found', async () => {
      jest.spyOn(friendRepository, 'findOne').mockResolvedValueOnce(undefined);

      await expect(service.findOne('1')).rejects.toThrowError(
        'No exite ningúna amistad con el id 1',
      );
    });
  });

  // describe('update', () => {
  //   it('should update a friend', async () => {
  //     const updateFriendDto = {
  //       user: 'new-user-id',
  //       friend: 'new-friend-id',
  //     };

  //     const findOneSpy = jest
  //       .spyOn(service, 'findOne')
  //       .mockResolvedValueOnce({
  //         id: '1',
  //         user: 'user-id',
  //         friend: 'friend-id',
  //       } as any);
  //     const saveSpy = jest
  //       .spyOn(friendRepository, 'save')
  //       .mockResolvedValueOnce(updateFriendDto as any);

  //     const result = await service.update('1', updateFriendDto);

  //     expect(findOneSpy).toHaveBeenCalledWith('1');
  //     expect(saveSpy).toHaveBeenCalledWith({ id: '1', ...updateFriendDto });
  //     expect(result).toEqual(updateFriendDto);
  //   });

  //   it('should throw NotFoundException if friend is not found', async () => {
  //     jest
  //       .spyOn(service, 'findOne')
  //       .mockRejectedValueOnce(new NotFoundException());

  //     await expect(service.update('1', {} as any)).rejects.toThrowError(
  //       NotFoundException,
  //     );
  //   });
  // });

  describe('remove', () => {
    it('should remove a friend', async () => {
      const deleteSpy = jest
        .spyOn(friendRepository, 'delete')
        .mockResolvedValueOnce({ affected: 1 } as any);

      const result = await service.remove('1');

      expect(deleteSpy).toHaveBeenCalledWith('1');
      expect(result).toEqual({
        success: true,
        message: 'Amistad eliminada exitosamente.',
      });
    });

    it('should handle database exceptions', async () => {
      const deleteSpy = jest
        .spyOn(friendRepository, 'delete')
        .mockRejectedValueOnce(new Error('Database error'));

      await expect(service.remove('1')).rejects.toThrowError(
        'Error no controlado, revisar los server logs',
      );
      expect(deleteSpy).toHaveBeenCalledWith('1');
    });
  });

  describe('deleteAllUsers', () => {
    it('should delete all friends', async () => {
      const queryBuilder = {
        delete: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        execute: jest.fn().mockResolvedValueOnce({ affected: 2 } as any),
      };

      jest
        .spyOn(friendRepository, 'createQueryBuilder')
        .mockReturnValue(queryBuilder as any);

      const result = await service.deleteAllUsers();

      expect(queryBuilder.delete).toHaveBeenCalled();
      expect(queryBuilder.where).toHaveBeenCalledWith({});
      expect(queryBuilder.execute).toHaveBeenCalled();
      expect(result).toEqual({ affected: 2 });
    });

    it('should handle database exceptions', async () => {
      const queryBuilder = {
        delete: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        execute: jest.fn().mockRejectedValueOnce(new Error('Database error')),
      };

      jest
        .spyOn(friendRepository, 'createQueryBuilder')
        .mockReturnValue(queryBuilder as any);

      await expect(service.deleteAllUsers()).rejects.toThrowError(
        'Error no controlado, revisar los server logs',
      );
      expect(queryBuilder.delete).toHaveBeenCalled();
      expect(queryBuilder.where).toHaveBeenCalledWith({});
      expect(queryBuilder.execute).toHaveBeenCalled();
    });
  });
});
