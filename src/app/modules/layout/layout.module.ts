import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*** App Module */
import { AppMaterialModule } from '../../app-material/app-material.module';

/** Module Components */
import { AppSideNavComponent } from './app-sidenav/app-sidenav.component';

@NgModule({
  declarations: [AppSideNavComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppSideNavComponent
  ]
})
export class AppLayoutModule { }
