import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApprendreComponent } from './apprendre/apprendre.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { PointsRelaisComponent } from './points-relais/points-relais.component';
import { TarifsComponent } from './tarifs/tarifs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'points-relais', component: PointsRelaisComponent },
  { path: 'apprendre', component: ApprendreComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
