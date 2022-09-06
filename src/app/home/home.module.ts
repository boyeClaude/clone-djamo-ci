import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepCardComponent } from './components/step-card/step-card.component';
import { HomeComponent } from './home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { FooterCardModule } from '../components/footer-card/footer-card.module';
import { FormModule } from '../components/form/form.module';

export const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    StepCardComponent,
    HomeComponent,
    HowItWorksComponent,
    HomeCardComponent,
    SmallCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    FooterCardModule,
    FormModule,
  ],
})
export class HomeModule {}
