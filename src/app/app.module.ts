import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { FooterCardModule } from './components/footer-card/footer-card.module';
import { CardTarifComponent } from './tarifs/components/card-tarif/card-tarif.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TarifsComponent,
    CardTarifComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FooterCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
