import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ShipmentsServices } from './shipments.services';

@Controller('/shipments')
export class ShipmentsController {
  constructor(private shipmentsServices: ShipmentsServices) { }

  @Get()
  getAllShipments() {
    return 'Devolviendo';
  }

  @Get('/shipment/id')
  getShipment() {
    return 'Devolviendo por id';
  }

  @Post()
  postShipment() {
    return 'creando';
  }

  @Delete()
  deleteShipment() {
    return 'Eliminando';
  }

  @Put()
  updateShipments() {
    return 'actualizando';
  }
}
