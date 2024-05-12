import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee/coffee';
import { CoffeeService } from '../coffee/coffee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  coffeeArray: Coffee[] = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeArray = this.coffeeService.coffeeArray;
    console.log(this.coffeeArray);

  }
}
