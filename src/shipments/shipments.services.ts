import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Shipment from './shipments.entity';
import { ShipmentsCreateDto } from './dto/createShipments.dto';
import { ShipmentsUpdateDto } from './dto/updateShipments.dto';
import { validate } from 'class-validator';

@Injectable()
export class ShipmentsServices {
  constructor(
    @InjectRepository(Shipment)
    private readonly shipmentRepository: Repository<Shipment>,
  ) { }

  // Obtener todos los envíos
  async getAll(): Promise<Shipment[]> {
    return await this.shipmentRepository.find();
  }

  // Obtener un solo envío por ID
  async getOne(id: number): Promise<Shipment | null> {
    return await this.shipmentRepository.findOne({ where: { id } });
  }

  // Crear un nuevo envío con validación DTO
  async create(data: ShipmentsCreateDto): Promise<Shipment> {
    const errors = await validate(data);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const newShipment = this.shipmentRepository.create(data);
    return await this.shipmentRepository.save(newShipment);
  }

  // Actualizar un envío por ID con validación DTO
  async update(id: number, data: ShipmentsUpdateDto): Promise<Shipment | null> {
    const errors = await validate(data);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    await this.shipmentRepository.update(id, data);
    return this.getOne(id);
  }

  // Eliminar un envío por ID
  async delete(id: number): Promise<boolean> {
    const result = await this.shipmentRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
