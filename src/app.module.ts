import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PingModule } from './ping/ping.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // TODO: use for .env configs
    AuthModule,
    PingModule,
    LogModule,
  ],
})
export class AppModule {}
