import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IpCheckerService {
  checkIpFn: any;

  constructor(fn: any) {
    this.checkIpFn = fn;
  }

  checkIp(ip: string) {
    return this.checkIpFn(ip);
  }
}
