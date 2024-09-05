import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { DeleteResult, Repository } from 'typeorm';
import { contactDto } from './dto/contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact) private contactsRepository: Repository<Contact>,
  ) {}

  createContact(contact: contactDto, id: number): Promise<any> {
    const newContact = this.contactsRepository.create({ ...contact, user: id });
    return this.contactsRepository.save(newContact);
  }
  getContacts(id: number): Promise<Contact[]> {
    const contacts = this.contactsRepository.find({ where: { user: id } });
    return contacts;
  }
  async deleteContact(id: number): Promise<DeleteResult> {
    const contactDeleted = await this.contactsRepository.delete(id);
    return contactDeleted
  }
}
