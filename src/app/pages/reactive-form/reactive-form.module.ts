import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, CardModule, InputTextModule],
  exports: [ReactiveFormComponent],
  providers: [],
})
export class ReactiveFormModule {}
