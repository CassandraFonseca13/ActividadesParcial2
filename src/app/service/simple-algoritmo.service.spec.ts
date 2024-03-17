import { TestBed } from '@angular/core/testing';

import { SimpleAlgoritmoService } from './simple-algoritmo.service';

describe('SimpleAlgoritmoService', () => {
  let service: SimpleAlgoritmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleAlgoritmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
