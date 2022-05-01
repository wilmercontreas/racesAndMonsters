import { Component, OnInit } from '@angular/core';
import { RacesService } from '../services/races.service';

@Component({
  selector: 'app-all-races',
  templateUrl: './all-races.component.html',
  styleUrls: ['./all-races.component.css']
})
export class AllRacesComponent implements OnInit {

  races: any = [];

  constructor(private racesService: RacesService) {}

  ngOnInit(): void {
    this.racesService.listAllRaces().subscribe( resp => {
      this.races = resp.results;
      console.log(this.races);
    }, (err) => {
      this.races = [];
    });
  }

}
