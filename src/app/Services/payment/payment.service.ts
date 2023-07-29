import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url = "http://localhost:8080/api/vi/payment"
  constructor(private http:HttpClient) { }
  addVessel(body:any){
    return this.http.post(`${this.url}/vessel`,body);
  }
  addFisherman(body:Object){
    return this.http.post(`${this.url}/fisherman`,body);
  }
  getAllFisherman(){
    return this.http.get(`${this.url}/fisherman`);
  }
  getByFishermanId(id:number){
    return this.http.get(`${this.url}/fisherman/${id}`)
  }
}
