import { TestBed } from '@angular/core/testing';

import { AdminRespuestasService } from './admin-respuestas.service';

describe('AdminRespuestasService', () => {
  let service: AdminRespuestasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRespuestasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
