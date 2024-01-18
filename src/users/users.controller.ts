import { Controller, Post, Get, Body, Param, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import createUserDto from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }
}
