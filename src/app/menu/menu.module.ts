import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CoffeeCardComponent } from './coffee-card/coffee-card.component';
import { DessertCardComponent } from './dessert-card/dessert-card.component';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    CoffeeCardComponent,
    DessertCardComponent
  ],  
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
