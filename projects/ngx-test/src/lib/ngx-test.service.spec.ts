import { TestBed, inject } from '@angular/core/testing';

import { NgxTestService } from './ngx-test.service';

describe('NgxTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTestService]
    });
  });

  it('should be created', inject([NgxTestService], (service: NgxTestService) => {
    expect(service).toBeTruthy();
  }));
});
