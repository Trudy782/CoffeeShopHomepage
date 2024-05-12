import { Injectable } from '@angular/core';
import { Coffee } from './coffee';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  coffeeArray:Coffee[]=[
    {
      title:'Espresso',
      image:'assets/espresso.jpg',
      description:'Enjoy the pure, robust flavor of our espresso shot, a simple and energizing coffee indulgence.',
      price:'$7'
    },
    {
      title:'Latte',
      image:'assets/Latte.jpg',
      description:'Savor the smooth and creamy goodness of our short latte, crafted with a perfect blend of espresso, steamed milk, and a delicate layer of foam.',
      price:'$10'
    },
    {
      title:'Iced Latte',
      image:'assets/IcedLatte.jpg',
      description:'Chill out with our iced latte—a refreshing blend of espresso, cold milk, and sweetness, perfect for a cool coffee break.',
      price:'$10'
    },
    {
      title:'Frappe',
      image:'assets/frappe.jpg',
      description:'Enjoy our frappé—a chilled coffee drink made with espresso, milk, ice, and a touch of sweetness, perfect for cooling down on a hot day.',
      price:'$12'
    },
  ]

  private gameSubject:Subject<Coffee>=new Subject<Coffee>();
  gameSubject$=this.gameSubject.asObservable();
  
  constructor() { }

  orderCoffee(coffee:Coffee){
    this.gameSubject.next(coffee);
  }

  searchGame(text:string)
  {
    const filtered = this.coffeeArray.filter((element:Coffee) => {return element.title.toLowerCase().includes(text.toLowerCase())});
    console.log(filtered);
  }
}
