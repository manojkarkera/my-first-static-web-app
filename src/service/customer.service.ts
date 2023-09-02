import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { Customer } from 'src/interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiBaseUrl = environment.apiUrl;
  private subscription_key = '5048a9d86a894b71ba658feab9e58595';  
  private customer_function_name= "customers-function";

  dummyCustomers: Customer[] = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Smith' },
    { id: '3', firstName: 'Manoj', lastName: 'Karkera' }
    // Add more dummy customer data
  ];


  getCustomers1(): Observable<Customer[]> {
    // Use 'of' to return the dummyCustomers data as an observable
    return of(this.dummyCustomers);
  }


  getCustomers(): Observable<Customer[]> {
    const url = `${this.apiBaseUrl}/${this.customer_function_name}/GetAllCustomers?subscription-key=` + this.subscription_key;
    return this.http.get<Customer[]>(url);
  }

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer): Observable<Customer> { 
    const url = `${this.apiBaseUrl}/${this.customer_function_name}/createCustomer?subscription-key=` + this.subscription_key;
    return this.http.post<Customer>(url, customer);
  }

  getCustomer(id: string, customerId: string): Observable<Customer> {
    const url = `${this.apiBaseUrl}/customer-func/GetCustomer`;
    const params = {
      'subscription-key': this.subscription_key,
      'Access-Control-Allow-Origin': '*',
      id,
      customerId
    }
    return this.http.get<Customer>(url, { params });
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiBaseUrl}/updateCustomer/${customer.id}`;
    return this.http.put<Customer>(url, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    const url = `${this.apiBaseUrl}/deleteCustomer/${id}`;
    return this.http.delete<void>(url);
  }
}
