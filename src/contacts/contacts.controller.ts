import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { contactDto } from './dto/contact.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Request as Req } from 'express';

interface requestWithUser extends Req {
  user: {
    id: number;
    iat: number;
  };
}

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createContact(
    @Body() newContact: contactDto,
    @Request() req: requestWithUser,
  ) {
    return this.contactService.createContact(newContact, req.user.id);
  }
  @Delete(":id")
  @UseGuards(AuthGuard)
  deleteContact(@Param('id', ParseIntPipe) id: number) {
    return this.contactService.deleteContact(id)
  }
}
