import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url = "http://localhost:8080/api/vi/message"
  private urlPublic = "http://localhost:8080/api/vi/public"

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
  addPublic(body:any){
    return this.http.post(`${this.urlPublic}`,body)
  }
  getPublic(){
    return this.http.get(`${this.urlPublic}`)
  }
  deletePublic(id:any){
    return this.http.delete(`${this.urlPublic}/${id}`)
  }
}
