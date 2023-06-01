import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFisherComponent } from './card-fisher.component';

describe('CardFisherComponent', () => {
  let component: CardFisherComponent;
  let fixture: ComponentFixture<CardFisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
