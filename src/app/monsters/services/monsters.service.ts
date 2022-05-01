import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  private api:string ="https://www.dnd5eapi.co/api/monsters";

  constructor(private http: HttpClient) {}

  listAllMonsters(): Observable<any>{
    return this.http.get(this.api);
  }

  listMonstereById(id: string):Observable<any>{
    const endPoint:string = `${this.api}/${id}`;
    return this.http.get(endPoint);
  }

}
