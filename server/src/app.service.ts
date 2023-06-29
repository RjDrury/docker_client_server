import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const x = 1;
    console.log(x);
    return { message: 'Hello World from the man himself!' };
  }
}
