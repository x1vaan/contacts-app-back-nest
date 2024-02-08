import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { registerDto } from 'src/auth/dto/register.dto';
import { ContactsService } from 'src/contacts/contacts.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private contactsService: ContactsService,
  ) {}

  createUser(user: registerDto): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
  getUsers(): Promise<User[]> {
    const users = this.usersRepository.find();
    return users;
  }
  getUserById(id: number): Promise<User> {
    const user = this.usersRepository.findOneBy({ id: id });
    return user;
  }
  getUserByEmail(email: string): Promise<User> {
    const user = this.usersRepository.findOneBy({ email: email });
    return user;
  }
  deleteUserById(id: number): Promise<any> {
    const deleted = this.usersRepository.delete({ id: id });
    return deleted;
  }
  getContacts(id: number): Promise<any> {
    // const contacts = this.usersRepository.findOne({
    //   where: { id: id },
    //   relations: { contacts: true },
    //   select: ['contacts'],
    // }); Podemos hacerlo de esta forma pero DEMORA MUCHO MAS
    const contacts = this.contactsService.getContacts(id); // o crear el servicio en contacts y llamarlo desde nuestro servicio ESTA ES MUCHO MAS RAPIDA
    return contacts;
  }
}
