import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';

import { initalDataUser } from './data/seed-data-users';

@Injectable()
export class SeedService {
  constructor(private readonly usersService: UsersService) {}

  async runSeed() {
    await this.insertNewUsers();

    return 'SEED EXECUTED';
  }

  private async insertNewUsers() {
    await this.usersService.deleteAllUsers();

    const users = initalDataUser.users;
    const insertPromises = [];

    users.forEach((user) => {
      insertPromises.push(this.usersService.create(user));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
