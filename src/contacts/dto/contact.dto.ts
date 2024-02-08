import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class contactDto {
    @IsString()
    @MinLength(3)
    name : string

    @IsNumber()
    number : number

    @IsEmail()
    email : string
}