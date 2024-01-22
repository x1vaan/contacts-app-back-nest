import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: registerDto): Promise<User> {
    const userAlreadyCreated = await this.usersService.getUserByEmail(
      registerDto.email,
    );
    if (userAlreadyCreated)
      throw new BadRequestException('User already exists.');
    const user = await this.usersService.createUser({
      name: registerDto.name,
      username: registerDto.username,
      email: registerDto.email,
      password: await bcrypt.hash(registerDto.password, 10),
    });

    return user;
  }
  async login({ email, password }: loginDto): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials.');

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid)
      throw new UnauthorizedException('Invalid credentials.');

    const payload = { id: user.id };
    const token = await this.jwtService.signAsync(payload);

    return { user: user.username, token };
  }
}
