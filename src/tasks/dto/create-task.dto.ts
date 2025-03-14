import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Hacer ejercicio', description: 'Nombre de la tarea', minLength: 5 })
  @IsString()
  @MinLength(1)
  task: string;

  @ApiProperty({ example: 'Correr 5km en el parque', description: 'Descripción de la tarea', minLength: 10, required: false })
  @IsString()
  @MinLength(1)
  descripcion:   string;
}