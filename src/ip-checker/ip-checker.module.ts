import { Module } from '@nestjs/common';
import { FastGeoIpCheckerService } from './fast-geo-ip-checker.service';

@Module({
  providers: [FastGeoIpCheckerService],
})
export class IpCheckerModule {}
