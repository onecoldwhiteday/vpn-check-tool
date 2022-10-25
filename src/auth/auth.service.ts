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
  ) { }

  async login(authInput: AuthDto): Promise<AuthOutputDTO> {
    const url = `${this.config.get('WEB_BACK_URL')}/api/login_check`;
    const res = await firstValueFrom(this.httpService.post(url, authInput));
    return res.data;
  }
}
