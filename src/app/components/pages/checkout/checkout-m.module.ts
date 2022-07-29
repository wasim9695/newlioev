import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutMRoutingModule } from './checkout-m-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServicesService} from '../../all-common/allServices';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@NgModule({
  declarations: [CheckoutComponent, PaymentPageComponent],
  imports: [
    CommonModule,
    CheckoutMRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    PaymentPageComponent
  ],
  providers: [ServicesService]
})
export class CheckoutMModule { }
