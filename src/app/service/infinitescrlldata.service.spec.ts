import { TestBed } from '@angular/core/testing';

import { InfinitescrlldataService } from './infinitescrlldata.service';

describe('InfinitescrlldataService', () => {
  let service: InfinitescrlldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfinitescrlldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
