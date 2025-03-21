import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ProvidersServices } from './providers.services';
import Provider from './providers.entity';
import { CreateProviderDto } from './dto/createProviders.dto';
import { UpdateProviderDto } from './dto/updateProviders.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('providers')
@UseGuards(JwtAuthGuard) // Esto protegerá todas las rutas del controlador
export class ProvidersController {
  constructor(private readonly providersService: ProvidersServices) { }

  // Obtener todos los proveedores
  @Get()
  async getAll(): Promise<Provider[]> {
    return await this.providersService.getAll();
  }

  // Obtener un proveedor por ID
  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Provider | null> {
    return await this.providersService.getOne(id);
  }

  // Crear un nuevo proveedor (Usando CreateProviderDto)
  @Post()
  async create(@Body() data: CreateProviderDto): Promise<Provider> {
    return await this.providersService.create(data);
  }

  // Actualizar un proveedor por ID (Usando UpdateProviderDto)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProviderDto,
  ): Promise<Provider | null> {
    return await this.providersService.update(id, data);
  }

  // Eliminar un proveedor por ID
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return await this.providersService.delete(id);
  }
}
