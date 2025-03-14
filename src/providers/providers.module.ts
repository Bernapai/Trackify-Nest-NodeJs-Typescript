import { Module } from '@nestjs/common';
import { ProvidersController } from './providers.controllers';
import { ProvidersServices } from './providers.services';

@Module({
  controllers: [ProvidersController],
  providers: [ProvidersServices],
})
export class ProvidersModule { }
