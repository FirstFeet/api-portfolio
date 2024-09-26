import { Injectable } from '@nestjs/common';
import fs from 'fs';

@Injectable()
export class AppService {

  

  getHello(): string {
    return 'Hello World!!!!@@';
  }

  getHi(): string {
    return 'Hi World!!!!@@';
  }
  getProjects(): string {
    let myData = JSON.parse(fs.readFileSync('./data/Projects.json', 'utf-8'))
    return myData;
  }
}
