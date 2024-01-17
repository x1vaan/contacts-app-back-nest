import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import createUserDto from './dto/create-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('register')
  createUser(@Body() newUser: createUserDto) {
    return this.userService.createUser(newUser);
  }
}
