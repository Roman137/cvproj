import {inject, TestBed} from '@angular/core/testing';

import {CvDataService} from './cv-data.service';

describe('JsonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataService]
    });
  });

  it('should be created', inject([CvDataService], (service: CvDataService) => {
    expect(service).toBeTruthy();
  }));
});
