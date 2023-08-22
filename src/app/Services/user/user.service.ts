import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Router } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8080/api/vi/users";

  public scrollEvent: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(private http: HttpClient) { }

  add(body: object){
    return this.http.post(`${this.url}`,body); 
  }
  get(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}`)
  }
  getId(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }
  delete(id: any){
    return this.http.delete(`${this.url}/${id}`)
  }
  update(id:any , user : any){
    return this.http.put(`${this.url}/${id}`, user);
  }
  login(name: any, pass:any):Observable <any>{
    return this.http.post<any>(this.url + '/login', null, {params : {name, pass}});
  }
  getUserIdandFishermanId(id:any){
    return this.http.get(`${this.url}/fisherman/${id}`);
  }
  updateleader(id:any,body:any){
    return this.http.put(`${this.url}/leader/${id}`,body);
  }
  getCount(){
    return this.http.get(`${this.url}/count`)
  }
  getNameByName(name:any){
    return this.http.get(`${this.url}/user/${name}`)
  }

}
