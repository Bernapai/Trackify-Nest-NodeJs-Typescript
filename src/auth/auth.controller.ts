import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.services';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }


  @Post('login')
  login(@Body() body: { name: string; password: string }) {
    return this.authService.login(body.name, body.password);
  }
}
