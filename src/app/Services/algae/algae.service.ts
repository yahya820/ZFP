import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgaeService {
 
  private url = "http://localhost:8080/api/vi/algae"

  constructor(private http: HttpClient) { }

  add(body: any){
    return this.http.post(`${this.url}/location`,body);
  }
  getAll(){
    return this.http.get(this.url);
  }
  findAll(){
    return this.http.get(`${this.url}/findAll`)
  }
  getById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }
  getCount(){
    return this.http.get(`${this.url}/count`)
  }
  getAllByTime(){
    return this.http.get(`${this.url}/getAllByTime`)
  }
}
