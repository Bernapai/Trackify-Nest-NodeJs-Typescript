import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersServices } from 'src/users/users.services';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersServices,
    private readonly jwtService: JwtService,
  ) { }

  async login(name: string, password: string) {
    const user = await this.usersService.findByName(name);
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const payload = { sub: user.id, name: user.name };
    return { access_token: this.jwtService.sign(payload) };
  }
}
