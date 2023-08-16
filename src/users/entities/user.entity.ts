import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
