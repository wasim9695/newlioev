import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../components/all-common/allServices';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: []
})
export class BookingDetailComponent implements OnInit {
bookigData: any=[];
enquiryData: any=[];
status:any;
// page = 1;
//   pageSize = 4;
  page = 1;
  pageSize = 4;
  // collectionSize: number;
  collectionSize = this.bookigData.length;
  currentRate = 8;
  countries: any;
  constructor(private servicesService:ServicesService,
    private modalService: NgbModal, private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('admin'));
   if(sessionStorage.getItem('admin')===null){
    this.router.navigate(['/admin'])
   }

    this.getAlls();
    this.getAllEnq();
  }

  getAlls(){
    this.servicesService.allGetList()
       .subscribe(
           data => {
            // const modalRef = this.modalService.open(PaymentPageComponent);
            // modalRef.componentInstance.my_modal_title = 'I your title';
            // modalRef.componentInstance.my_modal_content = 'I am your content';
          
               // console.log(data);
                
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
   
       //  console.log(data);
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
         
               //console.log(data);
               this.getAlls();
               //this.bookigData=data;
          },
          error => {
           
          });
      
        }else{
      
        }
  }

  getAllEnq(){
    this.servicesService.getContact()
       .subscribe(
           data => {
            // const modalRef = this.modalService.open(PaymentPageComponent);
            // modalRef.componentInstance.my_modal_title = 'I your title';
            // modalRef.componentInstance.my_modal_content = 'I am your content';
          
                
                
                this.enquiryData=data;
                console.log(data);
           },
           error => {
            
           });
  }

  refreshCountries() {
    this.countries = this.bookigData
      .map((any, i) => ({id: i + 1, ...any}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }




}
