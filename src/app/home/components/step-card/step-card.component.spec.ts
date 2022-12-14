import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCardComponent } from './step-card.component';

describe('StepCardComponent', () => {
  let component: StepCardComponent;
  let fixture: ComponentFixture<StepCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
