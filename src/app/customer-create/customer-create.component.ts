// customer-create.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/service/customer.service';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  newCustomer: Customer = { firstName: '', lastName: '' };

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  createCustomer(): void {
    this.customerService.createCustomer(this.newCustomer);
    this.router.navigateByUrl('/');
  }
}
