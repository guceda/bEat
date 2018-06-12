import { TestBed, inject } from '@angular/core/testing';

import { ExperienciasService } from './experiencias.service';

describe('ExperienciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienciasService]
    });
  });

  it('should be created', inject([ExperienciasService], (service: ExperienciasService) => {
    expect(service).toBeTruthy();
  }));
});
