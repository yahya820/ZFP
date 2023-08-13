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
    return this.http.get(`${this.url}/${id}`);
  }
  getAll(){
    return this.http.get(`${this.url}`);
  }
  getAllFisherman(){
    return this.http.get(`${this.url}/By1`)
  }
  update(id:number,body:any){
    return this.http.put(`${this.url}/${id}`,body);
  }
  getByFishermanId(id:number){
    return this.http.get(`${this.url}/find/${id}`);
  }
  getCount(){
    return this.http.get(`${this.url}/count`)
  }
}
