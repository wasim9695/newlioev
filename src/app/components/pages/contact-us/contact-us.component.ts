import { Component, OnInit } from '@angular/core';
import {SubSink} from '../../all-common/Unsubscribe-adapter';
import {ServicesService} from '../../all-common/allServices';
import {Contact} from '../../all-common/allModels/contact.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: []
})
export class ContactUsComponent extends SubSink  implements OnInit {
  public contact:any = new Contact();
  alerMsg:boolean;
  errorM:any;
  msg:any;
  constructor(private userService: ServicesService) { super();}

  ngOnInit(): void {
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
