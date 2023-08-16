import {
  IsString,
  MinLength,
  IsEmail,
  IsNumber,
  IsPositive,
  Min,
  IsIn,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
  @MinLength(3, {
    message: 'El campo nombre debe tener al menos 3 caracteres',
  })
  nombre: string;

  @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
  @IsEmail(
    {},
    {
      message:
        'El campo correo debe ser una dirección de correo electrónico válida',
    },
  )
  correo: string;

  @IsNumber({}, { message: 'El campo edad debe ser un número' })
  @IsPositive({ message: 'El campo edad debe ser un número positivo' })
  @Min(15, { message: 'La edad debe ser de al menos 15 años' })
  edad: number;

  @IsString({ message: 'El campo nombre debe ser una cadena de texto' })
  ciudad: string;

  @IsIn(['masculino', 'femenino', 'prefiero no decirlo'], {
    message:
      'El campo genero debe ser uno de los siguientes valores: masculino, femenino, prefiero no decirlo',
  })
  genero: string;
}
