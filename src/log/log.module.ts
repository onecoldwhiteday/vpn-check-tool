import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LogService } from './log.service';

@Module({
  imports: [HttpModule],
  providers: [LogService],
})
export class LogModule {}
