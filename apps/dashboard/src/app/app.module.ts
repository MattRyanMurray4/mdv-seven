import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MetalsComponent } from './metals/metals.component';
import { MetalsListComponent } from './metals/metals-list/metals-list.component';
import { MetalDetailsComponent } from './metals/metal-details/metal-details.component';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MetalsComponent, MetalsListComponent, MetalDetailsComponent],
  imports: [BrowserModule, HttpClientModule, RoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
