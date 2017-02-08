import { Injectable } from '@angular/core';
import { Hero } from './app.component';
import { Heroes } from './mock-heroes';

@Injectable()
export class HeroService {
  getHero(): Promise<Hero[]>{
    return Promise.resolve(Heroes);
  }
  getHeroone(id:number):Promise<Hero>{
    return this.getHero().then(heroone=>Heroes.find(heroone=>heroone.id===id));
  }
}