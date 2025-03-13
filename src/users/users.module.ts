import { Module } from '@nestjs/common';
import { UsersController } from './users.controllers';

@Module({
    controllers: [UsersController],
})
export class UsersModule { }
