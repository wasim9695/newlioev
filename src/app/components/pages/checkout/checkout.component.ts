import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Output,
  Input
} from '@angular/core';
import {allModel} from '../../all-common/allModels';
import {ServicesService} from '../../all-common/allServices';
import {SubSink} from '../../all-common/Unsubscribe-adapter';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Uploads } from "../../all-common/allModels/upload.model";
import { DetailCustomers } from "../../all-common/allModels/detailCustomer.model";
import { itemsDetails } from "../../all-common/allModels/itemsDetails.model";
import { PaymentPageComponent } from './payment-page/payment-page.component';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: []
})
export class CheckoutComponent extends SubSink  implements OnInit {
  public user = new allModel();
  @Input() my_modal_title;
  @Input() my_modal_content;
  public itemsDetail = new itemsDetails();
  closeResult: string;
  public detailCustomers = new DetailCustomers();
  public uploads = new Uploads();
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

  ngOnInit(): void {
    this.colorid = localStorage.getItem('Xid');
    this.color = localStorage.getItem('color');
    //console.log(this.colorid);
    this.qty=1;
    this.itemsDetail.Qty=this.qty;
    this.itemsDetail.bikename='Leo Bike';
    this.itemsDetail.color=this.color;
    this.detailCustomers.item.push(this.itemsDetail);
    this.color = localStorage.getItem('color');
   // console.log(this.color);
    this.dataLoad();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  //this.userService.logout();
  // get return url from route parameters or default to '/'
 this.returnUrl = this.route.snapshot.queryParams['/checkout'] || '/checkout';
    //this.getLogin();
    this.onSubmit();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
  

      // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //     return;
      // }

      this.loading = true;
     // this.f.email.value='lioevadmin_temp@gmail.com';
      this.userService.login('lioevadmin_temp@gmail.com', 'G4Growth710')
          .pipe(first())
          .subscribe(
              data => {
                   console.log(data);
                // if(data.status===false){
                //   this.ErrorMsg = true;
                //   return false;
                // }else{
                //  localStorage.getItem('currentUser');

                //  //this.router.navigate([this.returnUrl])
                //  .then(() => {
                //   window.location.reload();
                // });
             
                // }
              },
              error => {
                this.loading = false;
                this.ErrorMsg = true;
              });
  }
  dataLoad(){
    if(this.colorid==1){
      this.dataValue = "assets/img/home3/scooty-5.png";
     // console.log("1");
      }else if(this.colorid==2){
        //console.log("2");
        this.dataValue = "assets/img/home3/scooty-4.png";
      }
      else if(this.colorid==3){
        //console.log("3");
        this.dataValue = "assets/img/home3/scooty-2.png";
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
           this.userService.addupload(formData).subscribe(data => {
            //console.log("response for Db Upload" + JSON.stringify(data));
            this.uploads = data;
             
           });
         }
    } else {
    
      }
  
    }

    bookData(){
      this.detailCustomers.adhaar_img= this.uploads;
      this.detailCustomers.payment.amount=99999;
      this.detailCustomers.payment.method='cash';
      // this.detailCustomers.item.Qty=1;
      // this.detailCustomers.item.bikename='name';
      // this.detailCustomers.item.color='red';
       console.log(this.detailCustomers);
       
      //return false;
       this.userService.bookingAdd(this.detailCustomers)
       .subscribe(
           data => {
            // const modalRef = this.modalService.open(PaymentPageComponent);
            // modalRef.componentInstance.my_modal_title = 'I your title';
            // modalRef.componentInstance.my_modal_content = 'I am your content';
            this.alerMsg=true;
            this.modalService.dismissAll();
                console.log(data);
           },
           error => {
             this.loading = false;
             this.ErrorMsg = true;
           });
    }



  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      console.log("hello",result);
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
