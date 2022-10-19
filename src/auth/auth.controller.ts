import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ExceptionInterceptor } from 'src/common/interceptors';
import { AuthService } from './auth.service';
import { AuthDto, AuthOutputDTO } from './dto';

@UseInterceptors(ExceptionInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() body: AuthDto): Promise<AuthOutputDTO> {
    return this.authService.login(body);
  }
}
