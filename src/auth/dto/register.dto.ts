import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class registerDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Transform(({value}) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
