import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServicesService} from '../../components/all-common/allServices';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit {
  adUserName:string;
  adUserPass:string;
  constructor( private route: ActivatedRoute,
    private router: Router, private servicesService:ServicesService) { }

  ngOnInit(): void {
    //this.getAlls();
  }

  loginAdmin(){
    if(this.adUserName==='Admin' && this.adUserPass==='Admin@123'){
      sessionStorage.setItem('admin', this.adUserName);
      this.router.navigate(['/admin/booking-detail'])
    }else{
      alert("wrong detail");
    }
  }

  

}
