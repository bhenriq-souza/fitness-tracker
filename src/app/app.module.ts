import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

/** App Dependencies */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppLayoutModule } from './modules/layout/layout.module';
import { DateLocaleProvider } from './_core'

import { AuthService } from './_core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppLayoutModule
  ],
  providers: [
    DateLocaleProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
