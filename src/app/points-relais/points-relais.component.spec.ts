import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsRelaisComponent } from './points-relais.component';

describe('PointsRelaisComponent', () => {
  let component: PointsRelaisComponent;
  let fixture: ComponentFixture<PointsRelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsRelaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointsRelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
