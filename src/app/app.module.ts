import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
//路由
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './DashboardComponent/DashboardComponent';
import {AppRoutingModule} from'./app-routing.module'

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ],
})
export class AppModule { }

