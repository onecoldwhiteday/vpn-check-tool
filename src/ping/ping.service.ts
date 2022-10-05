import { Injectable } from '@nestjs/common';
import { lookup } from 'fast-geoip';
import { PingOutputDTO } from './dto';
@Injectable()
export class PingService {
  async checkIp(ip: string): Promise<PingOutputDTO> {
    const isRussian = await this.validateIp(ip);
    return { ip, isRussian };
  }

  private async validateIp(ip: string): Promise<boolean> {
    const ipData = await lookup(ip);
    return ipData.country === 'RU';
  }
}
