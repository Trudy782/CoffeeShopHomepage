import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Tema1';
  constructor(private renderer: Renderer2){} //Renderer2 = utility class that provides methods to manipulate and interact with the DOM

  ngOnInit(): void {
    // update CSS on html & body

    this.renderer.setStyle(document.documentElement, 'display', 'flex');
    this.renderer.setStyle(document.documentElement, 'flex-direction', 'column');
    //this.renderer.setStyle(document.documentElement, 'flex', '1');
    this.renderer.setStyle(document.documentElement, 'min-height', '100%');

    this.renderer.setStyle(document.body, 'background-color', 'grey');

    this.renderer.setStyle(document.body, 'margin', '0');
    this.renderer.setStyle(document.body, 'display', 'flex');
    this.renderer.setStyle(document.body, 'flex-direction', 'column');
    //this.renderer.setStyle(document.body, 'flex', '1');
    this.renderer.setStyle(document.body, 'min-height', '100%');
  }
}
