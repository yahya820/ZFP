import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaMenPDFComponent } from './sea-men-pdf.component';

describe('SeaMenPDFComponent', () => {
  let component: SeaMenPDFComponent;
  let fixture: ComponentFixture<SeaMenPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaMenPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaMenPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
