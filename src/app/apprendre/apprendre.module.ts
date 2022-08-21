import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApprendreComponent } from './apprendre.component';

export const learnRoutes: Routes = [
  { path: '', component: ApprendreComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(learnRoutes)],
})
export class ApprendreModule {}
