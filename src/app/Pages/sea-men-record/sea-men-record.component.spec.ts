import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaMenRecordComponent } from './sea-men-record.component';

describe('SeaMenRecordComponent', () => {
  let component: SeaMenRecordComponent;
  let fixture: ComponentFixture<SeaMenRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaMenRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaMenRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
