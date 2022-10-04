import { Body, Controller, Post, Ip } from '@nestjs/common';
import { PingDto } from './dto';
import { PingService } from './ping.service';
import { LogService } from '../log/log.service';

@Controller('ping')
export class PingController {
  constructor(
    private pingService: PingService,
    private logService: LogService,
  ) {}

  @Post()
  async checkIp(@Body() dto: PingDto, @Ip() ip: string) {
    const res = await this.pingService.checkIp(ip);
    this.logService.sendLog({ ...dto, ...res });
    return res;
  }
}
