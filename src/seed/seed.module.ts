import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { CommentsModule } from './../comments/comments.module';
import { FriendsModule } from './../friends/friends.module';
import { PublicationsModule } from './../publications/publications.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [UsersModule, CommentsModule, FriendsModule, PublicationsModule],
})
export class SeedModule {}
