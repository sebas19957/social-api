import { IsUUID } from 'class-validator';

export class CreateFriendDto {
  @IsUUID(undefined, { message: 'El campo user_id debe ser un UUID válido' })
  user_id: string;

  @IsUUID(undefined, {
    message: 'El campo user_id_friend debe ser un UUID válido',
  })
  user_id_friend: string;
}
