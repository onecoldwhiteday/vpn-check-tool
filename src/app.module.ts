import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { IpCheckerModule } from './ip-checker/ip-checker.module';
import { LogModule } from './log/log.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PingModule,
    LogModule,
    IpCheckerModule,
  ],
})
export class AppModule { }
