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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   // this.customer = this.customerService.getCustomerById(id);
  }

  updateCustomer(): void {
    if (this.customer) {
      this.customerService.updateCustomer(this.customer);
      this.router.navigateByUrl('/');
    }
  }
}
