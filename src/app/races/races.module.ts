import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRacesComponent } from './all-races/all-races.component';
import { RaceComponent } from './race/race.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllRacesComponent,
    RaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    AllRacesComponent,
    RaceComponent
  ]
})
export class RacesModule { }
