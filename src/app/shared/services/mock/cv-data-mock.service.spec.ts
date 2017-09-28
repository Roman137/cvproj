import {inject, TestBed} from '@angular/core/testing';

import {CvDataMockService} from './cv-data-mock.service';

describe('CvDataMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataMockService]
    });
  });

  it('should be created', inject([CvDataMockService], (service: CvDataMockService) => {
    expect(service).toBeTruthy();
  }));
});
