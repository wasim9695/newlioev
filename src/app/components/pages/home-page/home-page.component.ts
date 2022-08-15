import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Output,
  Input,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SubSink} from '../../all-common/Unsubscribe-adapter';
import {Router} from '@angular/router';
import {ServicesService} from '../../all-common/allServices';
import {Contact} from '../../all-common/allModels/contact.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: []
})
export class HomePageComponent extends SubSink  implements OnInit {
  public contact:any = new Contact();
  alerMsg:boolean;
  errorM:any;
  msg:any;
  
  constructor(private router: Router, private userService: ServicesService) { super();}

  ngOnInit(): void {
  }

  detailPage(event){
    var elements = document.querySelector(".owl-item.active.center img");
    var dataAttribute = elements.getAttribute('data-id');
    //console.log(dataAttribute);
    var dataAttributename = elements.getAttribute('data-name');
    //console.log(dataAttributename);
    localStorage.setItem('Xid', dataAttribute);
    localStorage.setItem('color',dataAttributename);
   this.router.navigate(['/product-detail']);
    //product-detail
  }

  singleClick(){
    this.router.navigate(['/product-detail']);
  }
  features(){
    this.router.navigate(['/all/feature']);
  }

  enquiryF(){
    this.userService.addContact(this.contact).subscribe(data => {
      //console.log("response for Db Upload" + JSON.stringify(data));
      //this.uploads = data;
      // console.log(data);
      this.alerMsg=true; 
      this.msg='Successfully Submited';
    },
      error => {
       
        if(error.error.name===undefined){
          this.errorM=error.error.phone;
        }else{
          this.errorM=(error.error.name || error.error.email);
        }
        this.alerMsg=true;      
        // console.log(error.error.name);
                      // this.loading = false;
                      // this.ErrorMsg = true;
                    });
                  }
                  
  

}
