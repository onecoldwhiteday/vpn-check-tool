import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthOutputDTO {
  @ApiProperty()
  @IsString()
  token: string;
}
