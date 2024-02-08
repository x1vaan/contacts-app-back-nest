import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Contact } from 'src/contacts/contact.entity';

@Module({
  imports : [TypeOrmModule.forFeature([User,Contact])], // declarar cual entidad/es se usa en este modulo
  controllers: [UsersController],
  providers: [UsersService],
  exports : [UsersService] // si queremos usar este servicio en otro modulo, tenemos que exportarlo
})
export class UsersModule {}
