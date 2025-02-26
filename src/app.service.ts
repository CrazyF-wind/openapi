import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTime(): string {
    const now = new Date();
    return now.toLocaleString();
  }
}
