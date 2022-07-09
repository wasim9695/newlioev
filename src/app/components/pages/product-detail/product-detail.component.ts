import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: []
})
export class ProductDetailComponent implements OnInit {
  colorid:any;
  color:string;
  dataValue:any;
  constructor() { }

  ngOnInit(): void {
    this.colorid = localStorage.getItem('Xid');
    console.log(this.colorid);
    this.color = localStorage.getItem('color');
   // console.log(this.color);
    this.backdata();
    //console.log(this.dataValue);
    
  }

  backdata(){
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
  

}
