import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTarifComponent } from './card-tarif.component';

describe('CardTarifComponent', () => {
  let component: CardTarifComponent;
  let fixture: ComponentFixture<CardTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTarifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
