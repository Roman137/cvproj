import {Injectable} from '@angular/core';
import {CvData} from '../../entities/cv-data';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {cvData} from '../../mock/cv-data';

@Injectable()
export class CvDataMockService {

  constructor() {
  }

  getCvData(): Observable<CvData> {
    return of(cvData);
  }

}
