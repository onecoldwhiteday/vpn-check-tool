import { Injectable } from '@nestjs/common';
import { lookup } from 'fast-geoip';
import { IpCheckerService } from './ip-checker.service';

@Injectable()
export class FastGeoIpCheckerService extends IpCheckerService {
  constructor() {
    super(lookup);
  }
}
