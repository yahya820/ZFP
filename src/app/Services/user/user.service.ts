import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
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
  getId(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }
  delete(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }
  update(id:number , user : any){
    return this.http.put(`${this.url}/${id}`, user);
  }
  login(name: any, pass:any):Observable <any>{
    return this.http.post<any>(this.url + '/login', null, {params : {name, pass}});
  }
}
