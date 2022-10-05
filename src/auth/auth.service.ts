import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { AuthDto, AuthOutputDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async login(dto: AuthDto): Promise<AuthOutputDTO> {
    const res = await firstValueFrom(
      this.httpService.post(
        `${this.config.get('WEB_BACK_URL')}/api/login_check`,
        dto,
      ),
    );
    return res.data;
  }
}
