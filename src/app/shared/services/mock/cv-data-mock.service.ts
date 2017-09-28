import {Injectable} from '@angular/core';
import {CvData} from '../../interfaces/cv-data';
import {jsonObject} from '../../constants/mock/json-data';

@Injectable()
export class CvDataMockService {

  constructor() {
  }

  getCvData(): CvData {
    return jsonObject;
  }

}
