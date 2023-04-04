import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeawedProComponent } from './seawed-pro.component';

describe('SeawedProComponent', () => {
  let component: SeawedProComponent;
  let fixture: ComponentFixture<SeawedProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeawedProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeawedProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
