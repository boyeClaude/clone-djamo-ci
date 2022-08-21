import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';

export const faqRoutes: Routes = [{ path: '', component: FaqComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(faqRoutes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class FAQModule {}
