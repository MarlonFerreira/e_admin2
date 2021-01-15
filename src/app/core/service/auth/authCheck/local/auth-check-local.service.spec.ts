import { TestBed } from '@angular/core/testing';

import { AuthCheckLocalService } from './auth-check-local.service';

describe('LocalService', () => {
  let service: AuthCheckLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCheckLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
