import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IConnectionLog } from './interfaces/log.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LogService {
  constructor(
    private config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendLog(logData: Partial<IConnectionLog>) {
    const log = this.generateLog(logData);
    return this.httpService.post(
      `${this.config.get('WEB_BACK_URL')}/api/projects/connection-logs`,
      log,
    );
  }

  private generateLog(logData: Partial<IConnectionLog>): IConnectionLog {
    return {
      username: logData.username,
      createdAt: Date.now().toLocaleString(), // FIXME: change format(?)
      ip: logData.ip,
      isRussian: logData.isRussian,
    };
  }
}
