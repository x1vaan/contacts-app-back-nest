import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { registerDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: registerDto): Promise<User> {
    const userAlreadyCreated = await this.usersService.getUserByEmail(
      registerDto.email,
    );
    if (userAlreadyCreated)
      throw new BadRequestException('User already exists.');
    const user = await this.usersService.createUser({
      name: registerDto.name,
      email: registerDto.email,
      username: registerDto.email,
      password: await bcrypt.hash(registerDto.password, 10),
    });

    return user;
  }
  async login(loginDto: loginDto): Promise<any> {
    
  }
}
