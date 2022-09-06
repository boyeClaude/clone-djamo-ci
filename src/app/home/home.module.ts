import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepCardComponent } from './components/step-card/step-card.component';
import { HomeComponent } from './home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { FooterCardComponent } from '../components/footer-card/footer-card.component';
import { FormComponent } from '../components/form/form.component';

export const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    StepCardComponent,
    HomeComponent,
    HowItWorksComponent,
    HomeCardComponent,
    SmallCardComponent,
    FooterCardComponent,
    FormComponent
  ],
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
