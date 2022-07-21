import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReceiptService } from '../service/receipt.service';
import { Error } from '../model/error.model';
import { Response } from '../model/response.model';

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
  filePath: string | undefined = "";
  response!: any;  
  error!: Error;
  loading!: boolean;

  constructor(private receiptService: ReceiptService) {}

  ngOnInit(): void {
  }

  generate(){
    this.loading = true;

    const data = {
      customerName: this.nameCustomer,
      customerEmail: this.emailCustomer,
      receipts: this.receipts
    }

    this.receiptService.sendData(data).subscribe((response: Response) => {
        this.filePath = response.file;
        this.loading = false;
    },
    (err) => { 
      this.error = err.error;
      this.loading = false;
      this.filePath = "";
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
    this.error = <Error>{};    
  }
}
