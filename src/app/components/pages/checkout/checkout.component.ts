import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Output,
  Input,
  ViewChild
} from '@angular/core';
import {allModel} from '../../all-common/allModels';
import {ServicesService} from '../../all-common/allServices';
import {SubSink} from '../../all-common/Unsubscribe-adapter';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Uploads } from "../../all-common/allModels/upload.model";
import { paymentUploads } from "../../all-common/allModels/paymentUpload.model";
import { DetailCustomers } from "../../all-common/allModels/detailCustomer.model";
import { itemsDetails } from "../../all-common/allModels/itemsDetails.model";
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: []
})
export class CheckoutComponent extends SubSink  implements OnInit {
  public user = new allModel();
  public payments:boolean=false;
  public firstModel:boolean=true;
  public afterMsg:boolean=false;
  @ViewChild('content') content: any;
  // modalRef?: NgbModalRef;
  // @ViewChild(PaymentPageComponent)
  // private PaymentPageComponents: PaymentPageComponent;
  //@ViewChild('content') PaymentPageComponent: any;
  public itemsDetail = new itemsDetails();
  closeResult: string;
  public detailCustomers = new DetailCustomers();
  public uploads = new Uploads();
  public paymentUpload = new paymentUploads();
  modalOptions:NgbModalOptions;
  loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    error = '';
    fileName: string;
    loading = false;
    ErrorMsg: boolean;
  colorid: any;
  color: string;
  dataValue: string;
  qty:number; 
  alerMsg:boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: ServicesService,
    private modalService: NgbModal,
    // public activeModal: NgbActiveModal
    ) { 
    super();
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }

   ngAfterViewInit() {
    //this.openModal();
  }
   
  ngOnInit(): void {
    this.openModal();
    this.colorid = localStorage.getItem('Xid');
    this.color = localStorage.getItem('color');
    //console.log(this.colorid);
    this.qty=1;
    this.itemsDetail.Qty=this.qty;
    this.itemsDetail.bikename='Leo Bike';
    this.itemsDetail.color=this.color;
    this.detailCustomers.items.push(this.itemsDetail);
    this.color = localStorage.getItem('color');
   // console.log(this.color);
    this.dataLoad();
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  //this.userService.logout();
  // get return url from route parameters or default to '/'
 //this.returnUrl = this.route.snapshot.queryParams['/checkout'] || '/checkout';
    //this.getLogin();
    //this.onSubmit();

// this.modalRef=this.modalService.open(PaymentPageComponent);



  }
   openModal() {
    //this.modalService.open(this.content);
  }

  // get f() { return this.loginForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // reset alerts on submit
  

  //     // stop here if form is invalid
  //     // if (this.loginForm.invalid) {
  //     //     return;
  //     // }

  //     this.loading = true;
  //    // this.f.email.value='lioevadmin_temp@gmail.com';
  //     this.userService.login('lioevadmin_temp@gmail.com', 'G4Growth710')
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                  console.log(data);
  //               // if(data.status===false){
  //               //   this.ErrorMsg = true;
  //               //   return false;
  //               // }else{
  //               //  localStorage.getItem('currentUser');

  //               //  //this.router.navigate([this.returnUrl])
  //               //  .then(() => {
  //               //   window.location.reload();
  //               // });
             
  //               // }
  //             },
  //             error => {
  //               this.loading = false;
  //               this.ErrorMsg = true;
  //             });
  // }
  dataLoad(){
    if(this.colorid==1){
      this.dataValue = "assets/img/home3/scooty-1.png";
     // console.log("1");
      }else if(this.colorid==2){
        //console.log("2");
        this.dataValue = "assets/img/home3/scooty-4.png";
      }
      else if(this.colorid==3){
        //console.log("3");
        this.dataValue = "assets/img/home3/scooty-2.png";
      }
      else if(this.colorid==4){
        //console.log("3");
        this.dataValue = "assets/img/home3/scooty-3.png";
      }else{
        
      }
  }




  onFileSelected(event) {
    if (confirm('Are you sure you want to save this file?')) {
      // Save it!
      const file: File = event.target.files[0];
         if (file) {
          const formData = new FormData(); 
          // Store form name as "file" with file data
          formData.append("upload", file, file.name);
          // formData.append('value',file);
           console.log(file);
           //this.uploads = formData;
          // console.log(this.userService.addupload(formData));
           //return false;
           this.userService.addupload(formData).subscribe(data => {
            //console.log("response for Db Upload" + JSON.stringify(data));
            this.uploads = data;
             
           });
         }
    } else {
    
      }
  
    }

    onFileSelectedPay(event) {
      if (confirm('Are you sure you want to save this file?')) {
        // Save it!
        const file: File = event.target.files[0];
           if (file) {
            const formData = new FormData(); 
            // Store form name as "file" with file data
            formData.append("upload", file, file.name);
            // formData.append('value',file);
             console.log(file);
             //this.uploads = formData;
            // console.log(this.userService.addupload(formData));
             //return false;
             this.userService.adduploadPay(formData).subscribe(data => {
              //console.log("response for Db Upload" + JSON.stringify(data));
              this.paymentUpload = data;
               
             });
           }
      } else {
      
        }
    
      }



    

    bookData(){
      this.detailCustomers.customer.adhaar_img= this.uploads;
      this.detailCustomers.payment.amount=99999;
      this.detailCustomers.payment.method='cash';
       console.log(this.detailCustomers);
       //this.modalService.dismissAll();
       this.firstModel=false;
       this.payments=true;
    }


    createBookData(){
     this.bookData();
     this.detailCustomers.payment.payment_image = this.paymentUpload;
     console.log("final", this.detailCustomers);
     //return false;
       this.userService.bookingAdd(this.detailCustomers).subscribe(data => {
                //console.log("dddd", data);
              //this.modalService.dismissAll();
              this.afterMsg=true;
              //  this.payments=true;
           },
           error => {
            console.log("dddd", error);
             this.loading = false;
             this.ErrorMsg = true;
           });
           this.modalService.dismissAll();
    }



  open(content: any) {
    this.firstModel=true;
       this.payments=false;
    this.modalService.open(content).result.then((result) => {
      console.log("hello");
     // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
