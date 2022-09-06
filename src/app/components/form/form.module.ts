import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';

@NgModule({
  imports: [CommonModule],
  exports: [FormComponent],
  declarations: [FormComponent],
})
export class FormModule {}
