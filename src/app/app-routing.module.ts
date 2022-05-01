import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AllMonstersComponent } from './monsters/all-monsters/all-monsters.component';
import { MonsterComponent } from './monsters/monster/monster.component';
import { AllRacesComponent } from './races/all-races/all-races.component';
import { RaceComponent } from './races/race/race.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'races',
    component: AllRacesComponent,
  },
  {
    path: 'monsters',
    component: AllMonstersComponent,
  },
  {
    path: 'monsters/:id',
    component: MonsterComponent,
  },
  {
    path: 'races/:id',
    component: RaceComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
