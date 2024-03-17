import { TestBed } from '@angular/core/testing';

import { AgendContactosService } from './agend-contactos.service';

describe('AgendContactosService', () => {
  let service: AgendContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
