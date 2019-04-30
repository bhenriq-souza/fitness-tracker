import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Module Components */
import { HomeRoutingModule } from './_routing/home.routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
