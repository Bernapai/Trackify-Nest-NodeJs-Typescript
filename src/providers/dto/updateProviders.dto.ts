import { IsString, IsOptional, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateProviderDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsOptional()
  @IsInt()
  id?: number;
}
