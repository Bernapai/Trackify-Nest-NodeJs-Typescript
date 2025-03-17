import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './users.entity';

@Injectable()
export class UsersServices {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  // Obtener todos los usuarios
  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Obtener un solo usuario por ID
  async getOne(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  // Actualizar un usuario por ID
  async update(id: number, data: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, data);
    return this.getOne(id);
  }

  // Eliminar un usuario por ID
  async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
