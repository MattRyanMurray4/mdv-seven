import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreStateModule } from '@mines/core-state';
import { CoreDataModule } from '@mines/core-data';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MetalsComponent } from './metals/metals.component';
import { MetalsListComponent } from './metals/metals-list/metals-list.component';
import { MetalDetailsComponent } from './metals/metal-details/metal-details.component';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@mines/material';
import { UiLibraryModule } from '@mines/ui-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MetalsComponent,
    MetalsListComponent,
    MetalDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibraryModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
