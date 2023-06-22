import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgaeService {
 
  private url = "http://localhost:8080/api/vi/algae"

  constructor(private http: HttpClient) { }

  add(body: object){
    return this.http.post(`${this.url}`,body);
  }
  getAll(){
    return this.http.get(this.url);
  }
  getById(id: number){
    return this.http.get(`${this.url}/${id}`);
  }
}
