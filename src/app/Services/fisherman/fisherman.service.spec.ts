import { TestBed } from '@angular/core/testing';

import { FishermanService } from './fisherman.service';

describe('FishermanService', () => {
  let service: FishermanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishermanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
