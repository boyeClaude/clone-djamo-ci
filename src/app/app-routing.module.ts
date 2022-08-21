import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TarifsComponent } from './tarifs/tarifs.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  { path: 'tarifs', component: TarifsComponent },

  {
    path: 'points-relais',
    loadChildren: () =>
      import('./points-relais/points-relais.module').then(
        (m) => m.PointsRelaisModule
      ),
  },

  {
    path: 'apprendre',
    loadChildren: () =>
      import('./apprendre/apprendre.module').then((m) => m.ApprendreModule),
  },

  { path: 'about', component: AboutComponent },

  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FAQModule),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
