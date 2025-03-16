import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Shipment from './shipments.entity';

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

  // Crear un nuevo envío
  async create(data: Partial<Shipment>): Promise<Shipment> {
    const newShipment = this.shipmentRepository.create(data);
    return await this.shipmentRepository.save(newShipment);
  }

  // Actualizar un envío por ID
  async update(id: number, data: Partial<Shipment>): Promise<Shipment | null> {
    await this.shipmentRepository.update(id, data);
    return this.getOne(id);
  }

  // Eliminar un envío por ID
  async delete(id: number): Promise<boolean> {
    const result = await this.shipmentRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
