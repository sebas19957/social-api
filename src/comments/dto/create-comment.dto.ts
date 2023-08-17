import { IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsUUID(undefined, {
    message: 'El campo publication_id debe ser un UUID válido',
  })
  publication_id: string;

  @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
  content: string;
}
