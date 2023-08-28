// customer-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/service/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  // customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    const id = 'ef38ba07-57f4-48a6-b8ba-7725e3f263d6';
    const customerId = '222';
    //this.customers = this.customerService.getCustomers(id,customerId);
    //this.customer = this.customerService.getCustomer(id,customerId);
    // this.fetchCustomer();
    console.log(this.customers);
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe(
      (response) => {
        console.log('Customer Data:');
        console.log(response);
        this.customers = response;
        // Handle response data
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }

  fetchCustomer() {
    const id = 'ef38ba07-57f4-48a6-b8ba-7725e3f263d6';
    const customerId = '222';

    this.customerService.getCustomer(id, customerId).subscribe(
      (response) => {
        console.log('Customer Data:');
        console.log(response);
        // Handle response data
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }

  editCustomer(id: string): void {
    // Implement edit navigation
  }

  deleteCustomer(id: string): void {
    // Implement delete logic
  }
}
