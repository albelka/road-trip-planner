import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { masterGoogleMapsConfig} from './api-keys';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MapMainComponent } from './map-main/map-main.component';
import { GasfeedComponent } from './gasfeed/gasfeed.component';
import { masterGasApiConfig } from './api-keys';

export const googleMapsConfig = {
  apiKey: masterGoogleMapsConfig,
  apiKeyGas: masterGasApiConfig,
};

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    GasfeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: masterGoogleMapsConfig,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
