import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

  heroes = HEROES;
  
  selectedHero: Hero = {
     id: 0,
     name: 'None'
  }
  ;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}