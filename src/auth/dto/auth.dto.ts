import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password?: string;
}
