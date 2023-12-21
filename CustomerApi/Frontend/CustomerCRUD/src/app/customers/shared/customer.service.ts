import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
const baseUrl = 'http://localhost:4444/api/Customers';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  selectedCustomer: Customer;
  CustomerList : Observable<Customer[]>;

  constructor(private httpClient : HttpClient) {

   }
   getCustomerList() : Observable<Customer[]>{
    this.CustomerList = this.httpClient.get<Customer[]>(baseUrl);
    return this.CustomerList;
   }

   getCustomerId(Id) : Observable<any>{
    return this.httpClient.get(`${baseUrl}/${Id}`);
   }

   addCustomer(data:any) : Observable<any>{
    return this.httpClient.post(baseUrl,data);
   }

   updateCustomer(id,data): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`,data);
   }
   
   deleteCustomer(id): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
   }

   deleteAllCustomers():Observable<any> {
    return this.httpClient.delete(baseUrl);
   }

   searchByCustomerName(name) : Observable<any> {
    return this.httpClient.get(`${baseUrl}?name=${name}`);
   }
}
