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
  receipts: any[] = [{
    date: "",
    description: "",
    value: ""
  }];
  filePath!: Observable<any>;
  response!: any;  

  constructor(private receiptService: ReceiptService) {}

  ngOnInit(): void {
  }

  generate(){
    const data = {
      customerName: this.nameCustomer,
      customerEmail: this.emailCustomer,
      receipts: this.receipts
    }

    this.receiptService.sendData(data).subscribe((response) => {
        this.response = response;
        this.filePath = this.response.file;
    });

  }

  addService(){
    const receipt = 
    {
        date: "",
        description: "",
        value: ""
    }
    
    this.receipts.push(receipt);
  }

}
