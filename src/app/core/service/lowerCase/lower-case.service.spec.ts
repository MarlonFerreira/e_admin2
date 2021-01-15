import { TestBed } from '@angular/core/testing';

import { LowerCaseService } from './lower-case.service';

describe('LowerCaseService', () => {
  let service: LowerCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LowerCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
