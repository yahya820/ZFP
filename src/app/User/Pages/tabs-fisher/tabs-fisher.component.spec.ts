import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFisherComponent } from './tabs-fisher.component';

describe('TabsFisherComponent', () => {
  let component: TabsFisherComponent;
  let fixture: ComponentFixture<TabsFisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsFisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsFisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
