import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8080/api/vi/users";
  
  constructor(private http: HttpClient) { }

  add(body: object){
    return this.http.post(`${this.url}`,body); 
  }
  get(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`)
  }
  getId(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}/${id}`);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  update(id:number , user : User):Observable<Object>{
    return this.http.put(`${this.url}/${id}`, user);
  }
}
