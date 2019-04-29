import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*** App Module */
import { AppMaterialModule } from '../../app-material/app-material.module';

/** Module Components */
import { AppSideNavComponent } from './app-sidenav/app-sidenav.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

@NgModule({
  declarations: [
    AppSideNavComponent, 
    AppToolbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppSideNavComponent,
    AppToolbarComponent
  ]
})
export class AppLayoutModule { }
