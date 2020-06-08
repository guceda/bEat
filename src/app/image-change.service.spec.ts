import { TestBed, inject } from '@angular/core/testing';

import { ImageChangeService } from './image-change.service';

describe('ImageChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageChangeService]
    });
  });

  it('should be created', inject([ImageChangeService], (service: ImageChangeService) => {
    expect(service).toBeTruthy();
  }));
});
