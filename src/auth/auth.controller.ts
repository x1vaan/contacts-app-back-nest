import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: registerDto) {
    return this.authService.register(registerDto);
  }
  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto);
  }
  @Get('profile')
  @UseGuards(AuthGuard)
  profile(@Request() req): any {
    return req.user;
  }
}
