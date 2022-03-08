import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// importing dependencies.
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,

    // adding the 'ReactiveFormsModule to the imports.
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
