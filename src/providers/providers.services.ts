import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Provider from './providers.entity';
import { CreateProviderDto } from './dto/createProviders.dto';
import { UpdateProviderDto } from './dto/updateProviders.dto';
import { validate } from 'class-validator';

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

  // Crear un nuevo proveedor con validación DTO
  async create(data: CreateProviderDto): Promise<Provider> {
    const errors = await validate(data);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const newProvider = this.providerRepository.create(data);
    return await this.providerRepository.save(newProvider);
  }

  // Actualizar un proveedor por ID con validación DTO
  async update(id: number, data: UpdateProviderDto): Promise<Provider | null> {
    const errors = await validate(data);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    await this.providerRepository.update(id, data);
    return this.getOne(id);
  }

  // Eliminar un proveedor por ID
  async delete(id: number): Promise<boolean> {
    const result = await this.providerRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
