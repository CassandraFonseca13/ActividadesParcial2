import { TestBed } from '@angular/core/testing';

import { VisBlogService } from './vis-blog.service';

describe('VisBlogService', () => {
  let service: VisBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
