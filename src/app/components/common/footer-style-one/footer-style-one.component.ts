import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-style-one',
  templateUrl: './footer-style-one.component.html',
  styleUrls: ['./footer-style-one.component.scss']
})
export class FooterStyleOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadJsFile("assets/js/custom.js");  
  }
 
  public loadJsFile(url) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  }  

}
