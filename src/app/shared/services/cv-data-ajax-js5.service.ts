import {Inject, Injectable} from '@angular/core';
import {URI_CONFIG} from '../config/di-tokens/uri.config';
import {UriConfig} from '../config/interfaces/uri-config';
import {Observable} from 'rxjs/Observable';
import {CvData} from '../entities/cv-data';

@Injectable()
export class CvDataAjaxJs5Service {


  constructor(@Inject(URI_CONFIG) private uriConfig: UriConfig) {
  }

  getCvData(): Observable<CvData> {
    const request = new XMLHttpRequest();
    return Observable.create((observer) => {
        request.open('GET', this.uriConfig.cvDataUri);
        request.responseType = 'blob';
        request.onload = () => {
          if (request.status === 200) {
            const reader = new FileReader();
            reader.onload = () => {
              console.log(reader.result);
              observer.next(JSON.parse(reader.result));
              observer.complete();
            };
            reader.onerror = () => {
              observer.error(reader.error);
            };
            reader.readAsText(request.response)
          } else {
            observer.error('request failed');
          }
        };
        request.onerror = () => {
          observer.error('request failed')
        };
        request.send();
      }
    );
  }
}
