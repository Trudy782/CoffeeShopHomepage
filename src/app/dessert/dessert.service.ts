import { Injectable } from '@angular/core';
import { Dessert } from './dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertService {
  dessertArray:Dessert[]=[
    {
      title:'Cookies',
      image:'assets/cookies.jpg',
      description:'Enjoy the pure, robust flavor of our espresso shot, a simple and energizing coffee indulgence.',
      price:'$8'
    },
    {
      title:'Croissant',
      image:'assets/Croissant.jpg',
      description:'Savor the smooth and creamy goodness of our short latte, crafted with a perfect blend of espresso, steamed milk, and a delicate layer of foam.',
      price:'$12'
    },
    {
      title:'Tiramisu',
      image:'assets/Tiramisu.jpg',
      description:'Chill out with our iced latte—a refreshing blend of espresso, cold milk, and sweetness, perfect for a cool coffee break.',
      price:'$15'
    },
    {
      title:'Carrot Cake',
      image:'assets/CarrotCake.jpg',
      description:'Enjoy our frappé—a chilled coffee drink made with espresso, milk, ice, and a touch of sweetness, perfect for cooling down on a hot day.',
      price:'$15'
    },
  ]

  constructor() { }
}
