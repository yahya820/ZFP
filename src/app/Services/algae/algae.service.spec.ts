import { TestBed } from '@angular/core/testing';

import { AlgaeService } from './algae.service';

describe('AlgaeService', () => {
  let service: AlgaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
