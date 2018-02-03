import { TestBed, inject } from '@angular/core/testing';

import { ChitgroupDataService } from './chitgroup-data.service';

describe('ChitgroupDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChitgroupDataService]
    });
  });

  it('should be created', inject([ChitgroupDataService], (service: ChitgroupDataService) => {
    expect(service).toBeTruthy();
  }));
});
