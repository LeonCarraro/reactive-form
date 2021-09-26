import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  exports: [ReactiveFormComponent],
  providers: [],
})
export class ReactiveFormModule {}
