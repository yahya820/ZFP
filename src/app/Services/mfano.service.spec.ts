import { TestBed } from '@angular/core/testing';

import { MfanoService } from './mfano.service';

describe('MfanoService', () => {
  let service: MfanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
