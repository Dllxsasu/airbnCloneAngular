import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import {ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
