import { IsString, IsUUID } from 'class-validator';

export class CreatePublicationDto {
  @IsUUID(undefined, { message: 'El campo user_id debe ser un UUID válido' })
  user_id: string;

  @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
  content: string;
}
