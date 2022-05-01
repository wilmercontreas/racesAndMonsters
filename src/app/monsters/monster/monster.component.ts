import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MonstersService } from '../services/monsters.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements OnInit {

  id: string = ""; 
  monster: any = {};
  monsterNotFound: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private monstersService: MonstersService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( params => {
        this.id = params['id'];
        return this.monstersService.listMonstereById(this.id);
      })
    ).subscribe( resp => {
        this.monster = resp;
        console.log(this.monster);
    }, (err)=> {
      this.monsterNotFound = true;
    });

  }

} 
