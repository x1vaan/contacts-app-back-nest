import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import jwtConstants from './constants/jwt.constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
  ], // tenemos que importar el modulo entero si queremos usar algun servicio en este caso de users
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
