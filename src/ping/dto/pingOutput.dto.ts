import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class PingOutputDTO {
  @ApiProperty()
  @IsString()
  ip: string;

  @ApiProperty()
  @IsBoolean()
  isRussian: boolean;
}
