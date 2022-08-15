import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import {ServicesService} from '../../all-common/allServices';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from "./home-page.component";


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService]
})
export class HomePageModule { }
