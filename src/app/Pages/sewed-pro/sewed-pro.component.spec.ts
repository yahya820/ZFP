import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewedProComponent } from './sewed-pro.component';

describe('SewedProComponent', () => {
  let component: SewedProComponent;
  let fixture: ComponentFixture<SewedProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewedProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SewedProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
