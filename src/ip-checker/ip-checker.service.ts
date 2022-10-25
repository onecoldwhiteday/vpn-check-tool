import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IpCheckerService {
  abstract checkIp(ip: string): Promise<any>;
}
