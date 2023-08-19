import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'src/users/entities/user.entity';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id_friend: string;

  @ManyToOne(() => User, (user) => user.friends)
  user: User;
}
