import { Component } from '@angular/core';
import { CustomerComponent } from "./customer/customer.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

@Component({
    selector: 'app-customers',
    standalone: true,
    templateUrl: './customers.component.html',
    styleUrl: './customers.component.css',
    imports: [CustomerComponent, CustomerListComponent]
})
export class CustomersComponent {

}
