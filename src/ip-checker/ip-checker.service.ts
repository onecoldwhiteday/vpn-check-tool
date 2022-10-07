import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IpCheckerService {
  abstract checkIp<T>(ip: string): Promise<T>;
}
