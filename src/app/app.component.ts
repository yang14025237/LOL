import { Component } from '@angular/core';
import { HeroService } from './hero.service';
export class Hero {
  id:number;
  name:string;
}

@Component({
 selector:'my-app',
template:`<h1>{{title}}</h1>
          <nav>
          <a routerLink="/dashboard">Dashboard</a>
          <a routerLink="/heros">Heroes</a>
          </nav>
          <router-outlet></router-outlet>`
})
export class AppComponent {
  title='Tour of Heroes';
}