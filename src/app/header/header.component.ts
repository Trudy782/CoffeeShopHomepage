import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee/coffee.service';
import { Coffee } from '../coffee/coffee';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue:string = "";
  coffeeArray:Coffee[] = [];
  orderedCoffee:Coffee | null=null;

  navbarItems = [
    { text: 'Coffee' },
    { text: 'Home' },
    { text: 'Coffee' },
    { text: 'Bakery' },
    { text: 'Shop' },
    { text: 'About' },
    { text: 'Login' }
   
  ];

  constructor(private coffeeService:CoffeeService){
    this.coffeeService.gameSubject$.subscribe((coffee:Coffee) => 
      { console.log(coffee); 
        this.orderedCoffee=coffee;
      });
  }

  ngOnInit(): void {
    this.coffeeArray=this.coffeeService.coffeeArray;
    console.log(this.coffeeArray);

  }

  searchCoffee()
  {
    this.coffeeService.searchGame(this.searchValue);
  }

  
}
