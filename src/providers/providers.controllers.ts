import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { ProvidersServices } from './providers.services';

@Controller({})
export class ProvidersController {
  constructor(private providersServices: ProvidersServices) { }

  @Get('/providers')
  getAllProviders() {
    return 'Devolviendo';
  }

  @Get('/providers/id')
  getProvider() {
    return 'Devolviendo por id';
  }

  @Delete('/providers')
  deleteProvider() {
    return 'Eliminando';
  }

  @Put('/providers')
  updateProvider() {
    return 'actualizando';
  }
}
