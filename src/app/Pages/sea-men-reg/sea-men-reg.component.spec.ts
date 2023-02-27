import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaMenRegComponent } from './sea-men-reg.component';

describe('SeaMenRegComponent', () => {
  let component: SeaMenRegComponent;
  let fixture: ComponentFixture<SeaMenRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaMenRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaMenRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
