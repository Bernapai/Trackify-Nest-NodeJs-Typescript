import { IsString, IsOptional } from 'class-validator';

export class ShipmentsUpdateDto {
  @IsString()
  @IsOptional()
  trackingNumber?: string;

  @IsString()
  @IsOptional()
  carrier?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
