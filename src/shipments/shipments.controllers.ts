import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ShipmentsServices } from './shipments.services';
import Shipment from './shipments.entity';

@Controller('shipments')
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
  async create(@Body() data: Partial<Shipment>): Promise<Shipment> {
    return await this.shipmentsService.create(data);
  }

  // Actualizar un envío por ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<Shipment>,
  ): Promise<Shipment | null> {
    return await this.shipmentsService.update(id, data);
  }

  // Eliminar un envío por ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return await this.shipmentsService.delete(id);
  }
}
