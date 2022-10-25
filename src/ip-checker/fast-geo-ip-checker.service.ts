import { Injectable } from '@nestjs/common';
import { lookup } from 'fast-geoip';
import { IpCheckerService } from './ip-checker.service';
@Injectable()
export class FastGeoIpCheckerService implements IpCheckerService {
  async checkIp(ip: string): Promise<any> {
    return lookup(ip);
  }
}
