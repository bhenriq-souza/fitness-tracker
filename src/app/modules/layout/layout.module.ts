import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

/*** App Material Module */
import { AppMaterialModule } from '../../app-material/app-material.module';

/** Module Components */
import { AppSideNavListComponent } from './app-sidenav-list/app-sidenav-list.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

/** Services */
import { AuthService } from '../../_core';

@NgModule({
  declarations: [
    AppSideNavListComponent, 
    AppToolbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    AppSideNavListComponent,
    AppToolbarComponent
  ],
  providers: [
    AuthService
  ]
})
export class AppLayoutModule { }
