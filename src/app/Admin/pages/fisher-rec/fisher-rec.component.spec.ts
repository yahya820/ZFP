import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisherRecComponent } from './fisher-rec.component';

describe('FisherRecComponent', () => {
  let component: FisherRecComponent;
  let fixture: ComponentFixture<FisherRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisherRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FisherRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
