import { TestBed, inject } from '@angular/core/testing';

import { CellsTrackerService } from './cells-tracker.service';

describe('CellsTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellsTrackerService]
    });
  });

  it('should ...', inject([CellsTrackerService], (service: CellsTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
