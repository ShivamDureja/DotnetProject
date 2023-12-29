import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CustomerService } from '../shared/customer.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';




@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  imports:[FormsModule, NgIf, ToastrModule]
})

export class CustomerComponent implements OnInit {

  custIdUpdate = null;
  constructor(public CustomerService: CustomerService, private toastr : ToastrService){

  }

  ngOnInit(): void {
    this.resetForm();    
}
  resetForm(form? : NgForm) {
    if(form != null){
      form.reset();
    }
    this.CustomerService.selectedCustomer = {
      custId : 0,
      name : '',
      address : '',
      mobile : '',
      email : ''
    }
  }

  OnSubmit(form : NgForm){
     console.log(form.value.CustId);
    if(form.value.CustId == null){
      form.value.CustId = 0;
    }
    this.CustomerService.selectedCustomer.custId = form.value.CustId;
    if(this.CustomerService.selectedCustomer.custId == 0){
      this.CustomerService.addCustomer(form.value)
      .subscribe(data => {
        console.log(data);
        form.value.CustId = 0;
        this.resetForm(form);
        this.CustomerService.getCustomerList();
        this.toastr.success('New Record Added Successfully!!', 'Customer Registeration');
      })
    }
    else {
      this.CustomerService.updateCustomer(form.value.CustId, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.CustomerService.getCustomerList();
        this.toastr.info('record Updated Successfully!!', 'Customer Registeration');
      });
    }
  }
}
