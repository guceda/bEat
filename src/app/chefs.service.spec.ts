import { TestBed, inject } from '@angular/core/testing';

import { ChefsService } from './chefs.service';

describe('ChefsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChefsService]
    });
  });

  it('should be created', inject([ChefsService], (service: ChefsService) => {
    expect(service).toBeTruthy();
  }));
});
