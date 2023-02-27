import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgaeRecordComponent } from './algae-record.component';

describe('AlgaeRecordComponent', () => {
  let component: AlgaeRecordComponent;
  let fixture: ComponentFixture<AlgaeRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgaeRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgaeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
