import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';
import { AdminComponent } from "../admin/admin.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingDetailComponent } from '../booking-detail/booking-detail.component';
import {ServicesService} from '../../components/all-common/allServices';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdminComponent, BookingDetailComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[ServicesService]
})
export class AdminsModule { }
