import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: []
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

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

}
