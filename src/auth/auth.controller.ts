import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthOutputDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() body: AuthDto): Promise<AuthOutputDTO> {
    return this.authService.login(body);
  }
}
