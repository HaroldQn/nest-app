import {
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {

  @IsString()
  @MinLength(1)
  task: string;

  @IsString()
  @MinLength(1)
  descripcion:   string;
}