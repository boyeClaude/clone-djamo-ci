import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsRelaisComponent } from './points-relais.component';

export const pointsRelaisRoutes: Routes = [
  { path: '', component: PointsRelaisComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pointsRelaisRoutes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class PointsRelaisModule {}
