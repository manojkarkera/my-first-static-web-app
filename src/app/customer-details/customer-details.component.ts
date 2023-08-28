// customer-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/interface/customer';
import { CustomerService } from 'src/service/customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   // this.customer = this.customerService.getCustomerById(id);
  }
}
