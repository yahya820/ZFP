import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdUserComponent } from './apd-user.component';

describe('ApdUserComponent', () => {
  let component: ApdUserComponent;
  let fixture: ComponentFixture<ApdUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApdUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
