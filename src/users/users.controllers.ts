import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UsersServices } from './users.services';

@Controller({})
export class UsersController {
  constructor(private usersServices: UsersServices) { }

  @Get('/users')
  getAllUsers() {
    return 'Devolviendo';
  }

  @Get('/users/id')
  getUser() {
    return 'Devolviendo por id';
  }

  @Post('/users')
  postUser() {
    return 'creando';
  }

  @Delete('/users')
  deleteUser() {
    return 'Eliminando';
  }

  @Put('/users')
  updateUser() {
    return 'actualizando';
  }
}
