import { TestBed } from '@angular/core/testing';

import { MemoramaService } from './memorama.service';

describe('MemoramaService', () => {
  let service: MemoramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
