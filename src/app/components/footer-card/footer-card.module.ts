import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormModule } from '../form/form.module';
import { FooterCardComponent } from './footer-card.component';

@NgModule({
  imports: [CommonModule, FormModule],
  declarations: [FooterCardComponent],
  exports: [FooterCardComponent],
})
export class FooterCardModule {}
