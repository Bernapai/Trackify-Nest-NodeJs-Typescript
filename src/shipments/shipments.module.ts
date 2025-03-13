import { Module } from '@nestjs/common';
import { ShipmentsController } from './shipments.controllers';

@Module({
    controllers: [ShipmentsController],
})
export class ShipmentsModule { }
