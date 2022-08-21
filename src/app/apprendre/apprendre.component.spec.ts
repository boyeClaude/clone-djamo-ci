import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprendreComponent } from './apprendre.component';

describe('ApprendreComponent', () => {
  let component: ApprendreComponent;
  let fixture: ComponentFixture<ApprendreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprendreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
