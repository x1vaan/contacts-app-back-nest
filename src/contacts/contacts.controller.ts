import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { contactDto } from './dto/contact.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createContact(@Body() newContact: contactDto, @Request() req : any) {
    console.log(req.user)
    return this.contactService.createContact(newContact, req.id);
  }
}
