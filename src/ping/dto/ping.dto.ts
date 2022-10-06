import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class PingDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
}
