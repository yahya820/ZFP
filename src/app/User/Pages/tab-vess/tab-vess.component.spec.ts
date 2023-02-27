import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVessComponent } from './tab-vess.component';

describe('TabVessComponent', () => {
  let component: TabVessComponent;
  let fixture: ComponentFixture<TabVessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabVessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabVessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
