import { Component, Input,OnInit } from '@angular/core';
import {Hero}               from './app.component';
import {HeroService}               from './hero.service';
import {ActivatedRoute,Params}     from '@angular/router';
import {Location}                  from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId:module.id,
  selector:'my-hero-Der',
  templateUrl:'hero-detail.component.html',
  
})
export class HeroDetailComponent implements OnInit{
  @Input()
  hero:Hero;
  constructor(
    private HeroService:HeroService,
    private router:ActivatedRoute,
    private location:Location
  ){}
  ngOnInit():void{
    this.router.params.switchMap((Params:Params)=>this.HeroService.getHeroone(+Params['id'])).subscribe(hero=>this.hero=hero)
  }
  goback():void{
    this.location.back();
  }
}