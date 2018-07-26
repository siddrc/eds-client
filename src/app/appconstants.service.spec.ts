import { TestBed, inject } from '@angular/core/testing';

import { AppconstantsService } from './appconstants.service';

describe('AppconstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppconstantsService]
    });
  });

  it('should be created', inject([AppconstantsService], (service: AppconstantsService) => {
    expect(service).toBeTruthy();
  }));
});
