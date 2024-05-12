import { Component, Input } from '@angular/core';
import { Dessert } from 'src/app/dessert/dessert';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss']
})
export class DessertCardComponent {
  @Input()dessert!: Dessert;

  orderDessert():void{
    console.log(this.dessert);
  }
}
