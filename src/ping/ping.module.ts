import { Module } from '@nestjs/common';
import { PingService } from './ping.service';
import { PingController } from './ping.controller';
import { LogService } from '../log/log.service';
import { HttpModule } from '@nestjs/axios';
import { IpCheckerService } from '../ip-checker/ip-checker.service';
import { FastGeoIpCheckerService } from '../ip-checker/fast-geo-ip-checker.service';

@Module({
  imports: [HttpModule],
  providers: [
    PingService,
    LogService,
    {
      provide: IpCheckerService,
      useClass: FastGeoIpCheckerService,
    },
  ],
  controllers: [PingController],
})
export class PingModule { }
