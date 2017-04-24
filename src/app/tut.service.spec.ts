import { TestBed, inject } from '@angular/core/testing';

import { TutService } from './tut.service';

describe('TutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutService]
    });
  });

  it('should ...', inject([TutService], (service: TutService) => {
    expect(service).toBeTruthy();
  }));
});
