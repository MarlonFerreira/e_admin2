import { TestBed } from '@angular/core/testing';

import { UrlTreeService } from './url-tree.service';

describe('UrlTreeService', () => {
  let service: UrlTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
