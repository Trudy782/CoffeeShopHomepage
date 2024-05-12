import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Coffee } from 'src/app/coffee/coffee';
import { CoffeeService } from 'src/app/coffee/coffee.service';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent {
  @Input()coffee!: Coffee;
  @Output() onOrder=new EventEmitter<Coffee>();

  constructor(private coffeeService:CoffeeService){}

  orderCoffee():void{
    this.coffeeService.orderCoffee(this.coffee);
  }
}
