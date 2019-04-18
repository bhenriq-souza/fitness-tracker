import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppMaterialModule { }
