import { Injectable } from '@nestjs/common';
import { PingOutputDTO } from './dto';
import { CountryCode } from '../common';
import { IpCheckerService } from 'src/ip-checker/ip-checker.service';

@Injectable()
export class PingService {
  constructor(private ipCheckerService: IpCheckerService) { }
  async checkIp(ip: string): Promise<PingOutputDTO> {
    const ipData = await this.ipCheckerService.checkIp(ip);
    const isRussian = ipData.country === CountryCode.RU;
    return { ip, isRussian };
  }
}
