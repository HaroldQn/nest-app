import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator'

export class UpdateTaskDto {
  @ApiProperty({ example: 'Hacer ejercicio', description: 'Nombre de la tarea', minLength: 5 })
  @IsString()
  @MinLength(5)
  task: string;

  @ApiProperty({ example: 'Correr 5km en el parque', description: 'Descripción de la tarea', minLength: 10, required: false })
  @IsOptional()
  @IsString()
  @MinLength(10)
  descripcion?: string;
}