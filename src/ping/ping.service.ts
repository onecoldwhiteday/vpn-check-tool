import { Injectable } from '@nestjs/common';
import { lookup } from 'fast-geoip';
import { PingOutputDTO } from './dto';
import { CountryCode } from '../common/enums/country-code';

@Injectable()
export class PingService {
  async checkIp(ip: string): Promise<PingOutputDTO> {
    const ipData = await lookup(ip);
    const isRussian = ipData.country === CountryCode.RU;
    return { ip, isRussian };
  }
}
