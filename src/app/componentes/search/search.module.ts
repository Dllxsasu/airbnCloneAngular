import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/app/environments/environment';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    IonicModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapToken, // Optional, can also be set per map (accessToken input of mgl-map)
    })

  ]
})
export class SearchModule { }
