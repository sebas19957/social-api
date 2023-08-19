import { IsString, IsUUID } from 'class-validator';

export class CreatePublicationDto {
  @IsUUID(undefined, { message: 'El campo user_id debe ser un UUID válido' })
  user: string;

  @IsString({ message: 'El campo content debe ser una cadena de texto' })
  content: string;
}
