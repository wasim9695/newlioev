import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../components/all-common/allServices';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: []
})
export class BookingDetailComponent implements OnInit {
bookigData: any=[];
  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.getAlls();
  }

  getAlls(){
    this.servicesService.allGetList()
       .subscribe(
           data => {
            // const modalRef = this.modalService.open(PaymentPageComponent);
            // modalRef.componentInstance.my_modal_title = 'I your title';
            // modalRef.componentInstance.my_modal_content = 'I am your content';
          
                console.log(data);
                this.bookigData=data;
           },
           error => {
            
           });
  }

}
