import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class ShipmentsCreateDto {
  @IsString()
  @IsNotEmpty()
  trackingNumber: string;

  @IsString()
  @IsNotEmpty()
  carrier: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsInt()
  providerId: number;
}
