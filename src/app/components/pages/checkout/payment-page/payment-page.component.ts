import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: []
})
export class PaymentPageComponent implements OnInit {
  @ViewChild('content') content: any;
  constructor(private modalService: NgbModal) { }
  ngAfterViewInit() {
    this.openModal();
  }
  openModal() {
    this.modalService.open(this.content);
  }
  ngOnInit(): void {
  }

}
