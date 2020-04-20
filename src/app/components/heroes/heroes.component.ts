import { Component, OnInit } from '@angular/core';
import {HeroeService, Heroe} from "../../servicios/heroe.service1";

@Component(
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[];

  constructor(private _heroesService: HeroeService) { }

  ngOnInit() {
    this.heroes = this._heroesService.getSiniestro();
    console.log (this.heroes);


  }

}
