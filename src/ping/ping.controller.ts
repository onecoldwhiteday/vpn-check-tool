import { Body, Controller, Post, Ip } from '@nestjs/common';
import { PingService } from './ping.service';
import { LogService } from '../log/log.service';
import { PingDto, PingOutputDTO } from './dto';

@Controller('ping')
export class PingController {
  constructor(
    private pingService: PingService,
    private logService: LogService,
  ) {}

  @Post()
  async checkIp(
    @Body() body: PingDto,
    @Ip() ip: string,
  ): Promise<PingOutputDTO> {
    const res = await this.pingService.checkIp(ip);
    this.logService.sendLog({ ...body, ...res });
    return res;
  }
}
