import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hello.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 1.0';
  heroes: String;
  constructor(private heroService: HeroService) {
  }


  toggleChild(){
      console.log("chick pressed")
  }

    hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  getHeroes(): void {
    console.log("Inside get heroes");
    console.log(this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes));

    return this.heroService.getHeroes();
  } 


  ngOnInit() {
     console.log("init")
  }
}
