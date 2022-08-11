import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../components/all-common/allServices';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: []
})
export class BookingDetailComponent implements OnInit {
bookigData: any=[];
status:any;
page = 1;
  pageSize = 4;
  collectionSize: number;
  currentRate = 8;
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

  approval(event){
    if (confirm('Are you sure you want?')) {
console.log(event.payment.payment_image.id);
this.status={'status':'approved'};
//console.log(event.payment.id, this.status);
//return false;
this.servicesService.payApproval(event.payment.id, this.status)
.subscribe(
    data => {
     // const modalRef = this.modalService.open(PaymentPageComponent);
     // modalRef.componentInstance.my_modal_title = 'I your title';
     // modalRef.componentInstance.my_modal_content = 'I am your content';
   
         console.log(data);
         //this.bookigData=data;
    },
    error => {
     
    });

  }else{

  }
}

  delete(event){
    if (confirm('Are you sure you want?')) {
      console.log(event.id);
      //return false;
      this.servicesService.deletes(event.id)
      .subscribe(
          data => {
           // const modalRef = this.modalService.open(PaymentPageComponent);
           // modalRef.componentInstance.my_modal_title = 'I your title';
           // modalRef.componentInstance.my_modal_content = 'I am your content';
         
               console.log(data);
               this.getAlls();
               //this.bookigData=data;
          },
          error => {
           
          });
      
        }else{
      
        }
  }

}
