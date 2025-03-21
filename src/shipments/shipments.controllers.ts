import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ShipmentsServices } from './shipments.services';
import Shipment from './shipments.entity';
import { ShipmentsCreateDto } from './dto/createShipments.dto';
import { ShipmentsUpdateDto } from './dto/updateShipments.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('shipments')
@UseGuards(JwtAuthGuard) // Esto protegerá todas las rutas del controlador
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsServices) { }

  // Obtener todos los envíos
  @Get()
  async getAll(): Promise<Shipment[]> {
    return await this.shipmentsService.getAll();
  }

  // Obtener un envío por ID
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Shipment | null> {
    return await this.shipmentsService.getOne(id);
  }

  // Crear un nuevo envío
  @Post()
  async create(
    @Body() data: ShipmentsCreateDto, // Usamos el DTO de creación aquí
  ): Promise<Shipment> {
    return await this.shipmentsService.create(data);
  }

  // Actualizar un envío por ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: ShipmentsUpdateDto, // Usamos el DTO de actualización aquí
  ): Promise<Shipment | null> {
    return await this.shipmentsService.update(id, data);
  }

  // Eliminar un envío por ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.shipmentsService.delete(id);
  }
}
