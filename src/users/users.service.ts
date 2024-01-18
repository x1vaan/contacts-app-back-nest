import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import createUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  getUsers(): Promise<User[]> {
    const users = this.usersRepository.find();
    return users;
  }
  getUser(id : number): Promise<User> {
    const user = this.usersRepository.findOneBy({id : id})
    return user
  }
}
