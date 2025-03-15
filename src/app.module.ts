import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { ProvidersModule } from './providers/providers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [ShipmentsModule, ProvidersModule, UsersModule, AuthModule, DatabaseModule],
})
export class AppModule {
}
