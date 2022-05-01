import { Component, OnInit } from '@angular/core';
import { MonstersService } from '../services/monsters.service';

@Component({
  selector: 'app-all-monsters',
  templateUrl: './all-monsters.component.html',
  styleUrls: ['./all-monsters.component.css']
})
export class AllMonstersComponent implements OnInit {

  monsters: any = [];

  constructor(private monstersServices: MonstersService) {}

  ngOnInit(): void {
    this.monstersServices.listAllMonsters().subscribe( resp => {
      this.monsters = resp.results;
      console.log(this.monsters);
    }, (err) => {
      this.monsters = [];
    });
  }

}
