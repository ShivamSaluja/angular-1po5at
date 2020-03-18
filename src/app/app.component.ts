import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 1.0';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit() {
  }
}
