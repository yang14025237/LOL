import { Component,OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero}        from '../app.component';
import {Heroes}      from '../mock-heroes';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.html',
  providers:[HeroService]
})
export class DashboardComponent implements OnInit
{ heroes:Hero[]=[];
  constructor(private heroService:HeroService){};
  ngOnInit() :void{
    this.heroService.getHero().then(heroes=>this.heroes=heroes.slice(1,5));
  };
}