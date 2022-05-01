import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  private api:string ="https://www.dnd5eapi.co/api/races";

  constructor(private http: HttpClient) {}

  listAllRaces(): Observable<any>{
    return this.http.get(this.api);
  }

  listRaceById(id: string):Observable<any>{
    const endPoint:string = `${this.api}/${id}`;
    return this.http.get(endPoint);
  }

}
