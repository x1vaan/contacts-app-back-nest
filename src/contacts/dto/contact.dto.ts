import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class contactDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  number: number;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(250)
  notes: string;

  @IsDate()
  @Type(() => Date)
  birthday_date: Date;
}
