// customer-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/service/customer.service';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer | undefined;
  id: string;
  customerId: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    // Get the route parameters
    this.id = this.route.snapshot.paramMap.get('id');
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    // this.customer = this.customerService.getCustomerById(id);
    this.fetchCustomer(this.id, this.customerId)
  }

  fetchCustomer(id: string, customerId: string) {

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

  updateCustomer(): void {
    if (this.customer) {
      this.customerService.updateCustomer(this.customer);
      this.router.navigateByUrl('/');
    }
  }
}
