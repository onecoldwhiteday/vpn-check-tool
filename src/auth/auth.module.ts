import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule],
  providers: [AuthService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
