import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Hero } from './app.component';
import { Router } from '@angular/router';


@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'heroescomponent.html' ,
  styleUrls:['heroes.component.css']
})

export class HeroesComponent implements OnInit { 
                             
                             

                             
                             heros:Hero[];
                             selectone:Hero;
                            
                             
                          onselect(hero:Hero):void{
                            this.selectone = hero;}

                          constructor(private heroService: HeroService,private router:Router) { }

                          getHeroes():void{this.heroService.getHero().then(heros=>this.heros=heros)}
                          ngOnInit():void {
                            this.getHeroes();
                          }
                          gotoDetail():void{this.router.navigate(['/detail', this.selectone.id]);}
                          };
