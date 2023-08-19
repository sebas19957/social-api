import { Injectable } from '@nestjs/common';

import { UsersService } from '../users/users.service';

@Injectable()
export class SeedService {
  constructor(private readonly usersService: UsersService) {}

  async runSeed() {
    await this.insertNewUsers();

    return 'SEED EXECUTED';
  }

  private async insertNewUsers() {
    await this.usersService.deleteAllUsers();

    return true;
  }
}
