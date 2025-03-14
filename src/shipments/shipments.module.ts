import { Module } from '@nestjs/common';
import { ShipmentsController } from './shipments.controllers';
import { ShipmentsServices } from './shipments.services';

@Module({
  controllers: [ShipmentsController],
  providers: [ShipmentsServices],
})
export class ShipmentsModule { }
