import { Controller, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersServices } from './users.services';
import User from './users.entity';

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
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<User>,
  ): Promise<User | null> {
    return await this.usersService.update(id, data);
  }

  // Eliminar un usuario por ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.usersService.delete(id);
  }
}
