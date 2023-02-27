import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgaeRegComponent } from './algae-reg.component';

describe('AlgaeRegComponent', () => {
  let component: AlgaeRegComponent;
  let fixture: ComponentFixture<AlgaeRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgaeRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgaeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
