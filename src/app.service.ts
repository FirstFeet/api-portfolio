import { Injectable } from '@nestjs/common';
// import fs from 'fs';
import * as MOCKED_RESPONSE_PROJECTS from '../data/Projects.json';
import * as MOCKED_RESPONSE_TECH_SKILLS from '../data/TechSkills.json';

@Injectable()
export class AppService {

  

  getHello(): string {
    return 'Hello World!!!!@@';
  }

  getHi(): string {
    return 'Hi team';
  }
  getProjects(): any {
    return MOCKED_RESPONSE_PROJECTS;
  }
  getTechSkills(): any {

    return MOCKED_RESPONSE_TECH_SKILLS;
  }
}
