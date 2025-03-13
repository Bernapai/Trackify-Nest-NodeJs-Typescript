import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controllers';

@Module({
    controllers: [ProvidersController],
})
export class ProvidersModule { }
