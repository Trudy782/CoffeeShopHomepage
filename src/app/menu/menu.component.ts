import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee/coffee';
import { CoffeeService } from '../coffee/coffee.service';
import { Dessert } from '../dessert/dessert';
import { DessertService } from '../dessert/dessert.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  coffeeArray: Coffee[] = [];
  dessertArray: Dessert[] =[];

  constructor(private coffeeService: CoffeeService,private dessertService: DessertService) { }

  ngOnInit(): void {
    this.coffeeArray = this.coffeeService.coffeeArray;
    this.dessertArray = this.dessertService.dessertArray;
  }
}
