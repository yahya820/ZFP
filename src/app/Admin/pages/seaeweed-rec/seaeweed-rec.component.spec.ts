import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaeweedRecComponent } from './seaeweed-rec.component';

describe('SeaeweedRecComponent', () => {
  let component: SeaeweedRecComponent;
  let fixture: ComponentFixture<SeaeweedRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaeweedRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaeweedRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
