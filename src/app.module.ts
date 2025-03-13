import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { ProvidersModule } from './providers/providers.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ShipmentsModule, ProvidersModule, UsersModule],
})
export class AppModule { }
