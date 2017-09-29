import {inject, TestBed} from '@angular/core/testing';

import {CvDataAjaxJs5Service} from './cv-data-ajax-js5.service';

describe('CvDataAjaxJs5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataAjaxJs5Service]
    });
  });

  it('should be created', inject([CvDataAjaxJs5Service], (service: CvDataAjaxJs5Service) => {
    expect(service).toBeTruthy();
  }));
});
