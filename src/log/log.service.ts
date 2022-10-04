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
    const log = {
      ...logData,
      createdAt: Date.now().toLocaleString(), // FIXME: Normalize
    };
    return this.httpService.post(
      `${this.config.get('WEB_BACK_URL')}/api/projects/${
        logData.projectId
      }/connection-logs`,
      log,
    );
  }
}
