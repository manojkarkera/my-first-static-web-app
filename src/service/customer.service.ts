import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { Customer } from 'src/interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiBaseUrl = environment.apiUrl;
  dummyCustomers: Customer[] = [
    { id: '1', firstName: 'John', lastName: 'Doe' },
    { id: '2', firstName: 'Jane', lastName: 'Smith' },
    // Add more dummy customer data
  ];
  

  getCustomers(): Observable<Customer[]> {
    // Use 'of' to return the dummyCustomers data as an observable
    return of(this.dummyCustomers);
  }
  
  constructor(private http: HttpClient) {}

  createCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiBaseUrl}/createCustomer`;
    return this.http.post<Customer>(url, customer);
  }

  getCustomer(id: string, customerId: string): Observable<Customer> {
    const url = `${this.apiBaseUrl}/customer-func/GetCustomer`;
    const  params = {
      'subscription-key': '70b956dbbce04268bebe06be81bdc617',
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
