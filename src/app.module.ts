import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { ProvidersModule } from './providers/providers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuhController } from './auh/auh.controller';

@Module({
  imports: [ShipmentsModule, ProvidersModule, UsersModule, AuthModule],
  controllers: [AuhController],
})
export class AppModule {
}
