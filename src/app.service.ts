import { Injectable } from '@nestjs/common';
// import fs from 'fs';
import * as MOCKED_RESPONSE from '../data/Projects.json';

@Injectable()
export class AppService {

  

  getHello(): string {
    return 'Hello World!!!!@@';
  }

  getHi(): string {
    return 'Hi World!!!!@@';
  }
  getProjects(): any {
    // let myData = JSON.parse(fs.readFileSync('../data/Projects.json', 'utf-8'))
    return MOCKED_RESPONSE;
  }
}
