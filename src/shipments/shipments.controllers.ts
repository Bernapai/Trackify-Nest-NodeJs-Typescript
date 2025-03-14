import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ShipmentsServices } from './shipments.services';

@Controller({})
export class ShipmentsController {
  constructor(private shipmentsServices: ShipmentsServices) { }

  @Get('/shipment')
  getAllShipments() {
    return 'Devolviendo';
  }

  @Get('/shipment/id')
  getShipment() {
    return 'Devolviendo por id';
  }

  @Post('/shipment')
  postShipment() {
    return 'creando';
  }

  @Delete('/shipment')
  deleteShipment() {
    return 'Eliminando';
  }

  @Put('/shipment')
  updateShipments() {
    return 'actualizando';
  }
}
