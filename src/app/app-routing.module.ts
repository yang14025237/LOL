import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './DashboardComponent/DashboardComponent';


const routes: Routes = [
 {
                    path:'heros',
                    component: HeroesComponent
                  },
                  {
                    path: 'dashboard',
                    component: DashboardComponent
                  },
                  {
                    path:'',
                    redirectTo:'/dashboard',
                    pathMatch:'full'
                  },
                  {
                    path:'detail/:id',
                    component:HeroDetailComponent
                  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}