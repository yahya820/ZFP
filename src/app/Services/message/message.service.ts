import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = "http://localhost:8080/api/vi/message"

  constructor(private http:HttpClient) { }

  add(id:any, body:any){
    return this.http.post(`${this.url}/${id}`,body);
  }
  getMessage(id:any){
    return this.http.get(`${this.url}/${id}`);
  }
  getCount(){
    return this.http.get(`${this.url}/count`)
  }
}
