import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RacesService } from '../services/races.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  id: string = ""; 
  race: any = {};
  raceNotFound: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private raceService: RacesService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap( params => {
        this.id = params['id'];
        return this.raceService.listRaceById(params['id']);
      })
    ).subscribe( resp => {
        this.race = resp;
        console.log(this.race);
    }, (err)=> {
      this.raceNotFound = true;
    });

  }

}
