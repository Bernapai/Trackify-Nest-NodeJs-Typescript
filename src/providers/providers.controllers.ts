import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { ProvidersServices } from './providers.services';

@Controller('/providers')
export class ProvidersController {
  constructor(private providersServices: ProvidersServices) { }

  @Get()
  getAllProviders() {
    return 'Devolviendo';
  }

  @Get('/providers/id')
  getProvider() {
    return 'Devolviendo por id';
  }

  @Delete()
  deleteProvider() {
    return 'Eliminando';
  }

  @Put()
  updateProvider() {
    return 'actualizando';
  }
}
