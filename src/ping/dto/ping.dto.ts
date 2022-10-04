import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PingDto {
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  projectId: string;
}
