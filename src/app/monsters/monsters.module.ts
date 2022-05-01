import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMonstersComponent } from './all-monsters/all-monsters.component';
import { MonsterComponent } from './monster/monster.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllMonstersComponent,
    MonsterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    AllMonstersComponent,
    MonsterComponent
  ]
})
export class MonstersModule { }
