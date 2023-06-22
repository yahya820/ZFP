import { TestBed } from '@angular/core/testing';

import { ModelGuard } from './model.guard';

describe('ModelGuard', () => {
  let guard: ModelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
