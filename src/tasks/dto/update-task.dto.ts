import { IsOptional, IsString, MinLength } from 'class-validator'

export class UpdateTaskDto {

  @IsString()
  @MinLength(5)
  task: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  descripcion?: string;
}