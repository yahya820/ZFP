import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
private url = "http://localhost:8080/api/vi/location"
  constructor(private http:HttpClient) { }

  getALL(){
    return this.http.get(`${this.url}`);
  }
  getById(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

}
