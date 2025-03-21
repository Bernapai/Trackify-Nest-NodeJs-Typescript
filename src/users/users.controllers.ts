import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UsersServices } from './users.services';
import User from './users.entity';
import { UpdateUserDto } from './dto/updateUser.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServices) { }

  // Obtener todos los usuarios
  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  // Obtener un usuario por ID
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<User | null> {
    return await this.usersService.getOne(id);
  }

  // Actualizar un usuario por ID
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateUserDto, // Usamos el DTO UpdateUserDto aquí
  ): Promise<User | null> {
    return await this.usersService.update(id, data);
  }

  // Eliminar un usuario por ID
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.usersService.delete(id);
  }
}
