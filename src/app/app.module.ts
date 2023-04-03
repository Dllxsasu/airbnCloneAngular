import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from './environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapToken, // Optional, can also be set per map (accessToken input of mgl-map)
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
