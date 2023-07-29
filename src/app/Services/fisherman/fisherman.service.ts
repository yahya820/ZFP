import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FishermanService {

  private url= "http://localhost:8080/api/vi/fisherman"

  constructor(private http:HttpClient) { }

  add(body:any){
    return this.http.post(`${this.url}`,body);
  }
  getByUserId(id:any){
    return this.http.get(`${this.url}/user/${id}`);
  }
  getAll(){
    return this.http.get(`${this.url}`);
  }
}
