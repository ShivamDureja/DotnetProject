import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
//  host : {ngSkipHydration: 'true'}
})
export class CustomerListComponent implements OnInit {
  allCustomers: Observable<Customer[]>;

  constructor(public custService: CustomerService, private toastr: ToastrService){  }

  ngOnInit(): void {
      this.loadAllCustomers();
  }

  loadAllCustomers(){
    this.allCustomers = this.custService.getCustomerList();
    console.log(this.custService.getCustomerList());
  }
  showForEdit(cust: Customer){
    this.custService.selectedCustomer = Object.assign({},cust);
  }
  OnDelete(id: number){
    if(confirm('Are you sure you want to delete this record ?') == true){
      this.custService.deleteCustomer(id)
      .subscribe(x => {
        this.custService.getCustomerList();
        this.toastr.warning("Record Deleted Successfully!!");
      })
    }
  }
}
