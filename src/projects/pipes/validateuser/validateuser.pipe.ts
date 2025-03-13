import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Value',{...value});
    const agNumber = parseInt(value.age.toString(), 10);

    if (isNaN(agNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: agNumber };
  }
}
