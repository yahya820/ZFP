import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MfanoService {

  private url = "http://localhost:8080/api/vi/mfano";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}`)
  }
  getById(id:number){
    return this.http.get(`${this.url}/${id}`)

  }

}
