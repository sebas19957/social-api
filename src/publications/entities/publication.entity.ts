import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.friends)
  user: User;

  @Column('text')
  content: string;

  @OneToMany(() => Comment, (comment) => comment.publication)
  comments: Comment[];
}
