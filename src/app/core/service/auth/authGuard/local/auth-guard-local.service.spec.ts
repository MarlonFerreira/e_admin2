import { TestBed } from '@angular/core/testing';

import { AuthGuardLocalService } from './auth-guard.service-local';

describe('GuardService', () => {
  let service: AuthGuardLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
