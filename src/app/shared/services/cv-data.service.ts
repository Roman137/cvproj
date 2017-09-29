import {Inject, Injectable} from '@angular/core';
import {CvData} from '../entities/cv-data';
import {URI_CONFIG} from '../config/di-tokens/uri.config';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {UriConfig} from '../config/interfaces/uri-config';

@Injectable()
export class CvDataService {

  constructor(@Inject(URI_CONFIG) private uriConfig: UriConfig, private http: HttpClient) {
  }

  getCvData(): Observable<CvData> {
    return this.http.get(this.uriConfig.cvDataUri);
  }


}
