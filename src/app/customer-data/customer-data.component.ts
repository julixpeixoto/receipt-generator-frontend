import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Response } from '../model/response.model';
import { ReceiptService } from '../service/receipt.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  nameCustomer!: string;
  emailCustomer!: string;
  filePath!: Observable<any>;
  response!: any;

  constructor(private receiptService: ReceiptService) {}

  ngOnInit(): void {
  }

  generate(){
    const data = {
      customerName: this.nameCustomer,
      customerEmail: this.emailCustomer,
      receipts: [
          {
              date: "2022-05-14",
              description: "assistencia",
              value: "40.00"
          },
          {
              date: "2022-06-15",
              description: "assistencia 2",
              value: "50.00"
          }
      ]
    }

    this.receiptService.sendData(data).subscribe((response) => {
        this.response = response;
        this.filePath = this.response.file;
    });

  }

}
