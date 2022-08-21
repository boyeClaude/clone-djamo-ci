import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { PointsRelaisComponent } from './points-relais/points-relais.component';
import { ApprendreComponent } from './apprendre/apprendre.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { StepCardComponent } from './home/components/step-card/step-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PointsRelaisComponent,
    ApprendreComponent,
    AboutComponent,
    FaqComponent,
    FooterComponent,
    TarifsComponent,
    StepCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
