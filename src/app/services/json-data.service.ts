import {Injectable} from '@angular/core';
import {jsonObject} from '../json-data';

@Injectable()
export class JsonDataService {

  constructor() {
  }

  aboutMe(): string {
    return jsonObject.aboutMe;
  }

  skills(): string[] {
    return jsonObject.skills;
  }

  hobbies(): string[] {
    return jsonObject.hobbies;
  }

  education(): string[] {
    return jsonObject.education;
  }


}
