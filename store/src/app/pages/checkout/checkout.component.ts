import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/shared/components/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  model = {
    name: 'Store',
    store: '',
    shippingAddress: 'Shipping Adress',
    city: 'City',
  };
  stores = [
    {
      id: 1,
      name: 'Park Row at Beekman St',
      address: '38 Park Row',
      city: 'New York',
      openingHours: '10:00 - 14:00 and 17:00 - 20:30',
    },
    {
      id: 2,
      name: 'Store Alcalá',
      address: 'Calle de Alcalá, 21',
      city: 'Madrid',
      openingHours: '10:00 - 14:00 and 17:00 - 20:30',
    },
  ];
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.getStores();
  }

  onPickupOrDelivery(value: boolean): void {
    console.log(value);
  }

  onSubmit(): void {
    console.log('save');
  }

  getStores(): void {
    this.dataSvc
      .getStores()
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
