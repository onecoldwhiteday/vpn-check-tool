import { Injectable } from '@nestjs/common';
import { lookup } from 'fast-geoip';
@Injectable()
export class PingService {
  async checkIp(ip: string): Promise<{ ip: string; isRussian: boolean }> {
    const isRussian = await this.validateIp(ip);
    return { ip, isRussian };
  }

  private async validateIp(ip: string): Promise<boolean> {
    console.log(ip);
    const ipData = await lookup(ip);
    console.log(ipData);
    return true;
  }
}
