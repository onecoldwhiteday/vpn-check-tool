import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConnectionLogDTO } from './dto';

@Injectable()
export class LogService {
  constructor(
    private config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendLog(logData: Partial<ConnectionLogDTO>) {
    const log = LogService.generateLog(logData);
    const url = `${this.config.get('WEB_BACK_URL')}/api/connection-logs`;
    return this.httpService.post(url, log);
  }

  private static generateLog(
    logData: Partial<ConnectionLogDTO>,
  ): ConnectionLogDTO {
    const createdAt = Date.now().toLocaleString();
    return {
      username: logData.username,
      createdAt,
      ip: logData.ip,
      isRussian: logData.isRussian,
    };
  }
}
