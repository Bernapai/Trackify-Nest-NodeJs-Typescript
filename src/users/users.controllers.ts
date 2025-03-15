import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersServices } from './users.services';

@Controller('/users')
export class UsersController {
  constructor(private usersServices: UsersServices) { }

  @Get()
  getAllUsers() {
    return 'Devolviendo';
  }

  @Get('/users/id')
  getUser() {
    return 'Devolviendo por id';
  }

  @Post()
  postUser() {
    return 'creando';
  }

  @Delete()
  deleteUser() {
    return 'Eliminando';
  }

  @Put()
  updateUser() {
    return 'actualizando';
  }
}
