import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class contactDto {
    @IsString()
    @MinLength(3)
    name : string

    @IsNumber()
    number : number

    @IsEmail()
    email : string

    @IsString()
    @MaxLength(250)
    notes : string
}