import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProvidersServices } from './providers.services';
import Provider from './providers.entity';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersServices) { }

  // Obtener todos los proveedores
  @Get()
  async getAll(): Promise<Provider[]> {
    return await this.providersService.getAll();
  }

  // Obtener un proveedor por ID
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Provider | null> {
    return await this.providersService.getOne(id);
  }

  // Crear un nuevo proveedor
  @Post()
  async create(@Body() data: Partial<Provider>): Promise<Provider> {
    return await this.providersService.create(data);
  }

  // Actualizar un proveedor por ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<Provider>,
  ): Promise<Provider | null> {
    return await this.providersService.update(id, data);
  }

  // Eliminar un proveedor por ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.providersService.delete(id);
  }
}
