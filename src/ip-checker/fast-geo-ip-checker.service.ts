import { Injectable } from '@nestjs/common';
import { lookup } from 'fast-geoip';
import { IpCheckerService } from './ip-checker.service';
@Injectable()
export class FastGeoIpCheckerService implements IpCheckerService {
  async checkIp<IIpInfo>(ip: string): Promise<IIpInfo> {
    return lookup(ip) as Promise<IIpInfo>;
  }
}
