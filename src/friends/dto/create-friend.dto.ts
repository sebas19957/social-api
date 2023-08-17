import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateFriendDto {
  @IsNotEmpty({ message: 'El campo userId es requerido.' })
  @IsUUID(undefined, { message: 'El campo userId debe ser un UUID válido' })
  user: string;

  @IsNotEmpty({ message: 'El campo friendId es requerido.' })
  @IsUUID(undefined, {
    message: 'El campo friendId debe ser un UUID válido',
  })
  friend: string;
}
