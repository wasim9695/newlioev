import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: []
})
export class ProductDetailComponent implements OnInit {
  colorid:any;
  color:string;
  dataValue:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.colorid = localStorage.getItem('Xid');
    //console.log(this.colorid);
    this.color = localStorage.getItem('color');
    //console.log(this.color);
   // console.log(this.color);
    this.backdata();
    //console.log(this.dataValue);
    
  }

  bookPro(){
    localStorage.setItem('Xid', this.colorid);
    localStorage.setItem('color',this.color);
   this.router.navigate(['/checkout']);
  }

  backdata(){
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
        //console.log("4");
        this.dataValue = "assets/img/home3/scooty-3.png";
      }else{
        
      }
  }


  sProduct(id: any,color: any){
    console.log(id,color);
    localStorage.setItem('Xid', id);
    localStorage.setItem('color',color);
   this.router.navigate(['/checkout']);
    //product-detail

  }
  

}
