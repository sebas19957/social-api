import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Friend } from './../../friends/entities/friend.entity';
import { Comment } from './../../comments/entities/comment.entity';
import { Publication } from './../../publications/entities/publication.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text', {
    unique: true,
  })
  correo: string;

  @Column('numeric')
  edad: number;

  @Column('text')
  ciudad: string;

  @Column('text')
  genero: string;

  @OneToMany(() => Publication, (publication) => publication.user)
  publications: Publication[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Friend, (friend) => friend.user)
  friends: Friend[];
}
