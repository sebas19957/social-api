import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Publication } from './../../publications/entities/publication.entity';
import { User } from './../../users/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  content: string;

  @ManyToOne(() => Publication, (publication) => publication.comments, {
    cascade: true,
  })
  publication: Publication;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
