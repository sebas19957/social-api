import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Publication } from 'src/publications/entities/publication.entity';
import { Friend } from 'src/friends/entities/friend.entity';
import { Comment } from 'src/comments/entities/comment.entity';

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
