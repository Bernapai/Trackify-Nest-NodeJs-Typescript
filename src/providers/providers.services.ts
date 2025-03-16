import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Provider from './providers.entity';

@Injectable()
export class ProvidersServices {
  constructor(
    @InjectRepository(Provider)
    private readonly providerRepository: Repository<Provider>,
  ) { }

  // Obtener todos los proveedores
  async getAll(): Promise<Provider[]> {
    return await this.providerRepository.find();
  }

  // Obtener un solo proveedor por ID
  async getOne(id: number): Promise<Provider | null> {
    return await this.providerRepository.findOne({ where: { id } });
  }

  // Crear un nuevo proveedor
  async create(data: Partial<Provider>): Promise<Provider> {
    const newProvider = this.providerRepository.create(data);
    return await this.providerRepository.save(newProvider);
  }

  // Actualizar un proveedor por ID
  async update(id: number, data: Partial<Provider>): Promise<Provider | null> {
    await this.providerRepository.update(id, data);
    return this.getOne(id);
  }

  // Eliminar un proveedor por ID
  async delete(id: number): Promise<boolean> {
    const result = await this.providerRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
