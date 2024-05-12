import { Component, Input } from '@angular/core';
import { Coffee } from 'src/app/coffee/coffee';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent {
  @Input()coffee!: Coffee;

  constructor(){}

  orderCoffee():void{
    console.log(this.coffee);
  }
}
