import { IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsUUID(undefined, {
    message: 'El campo publication debe ser un UUID válido',
  })
  publication: string;

  @IsUUID(undefined, {
    message: 'El campo user debe ser un UUID válido',
  })
  user: string;

  @IsString({ message: 'El campo content debe ser una cadena de texto' })
  content: string;
}
