import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReceiptService } from '../service/receipt.service';
import { Error } from '../model/error.model';

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
  error!: Error;

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
    },
    (err) => { 
      this.error = err.error;
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

  disableAlert(){
    this.error = <Error>{}
  }
}
