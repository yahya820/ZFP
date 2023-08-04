import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  getByFishermanId(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/fisherman/${id}`)
  }
  getAllPaymentFisherman(){
    return this.http.get(`${this.url}/allPayment`);
  }
  getAllVessel(){
    return this.http.get(`${this.url}`)
  }
  getAllPaymentByUSerId(id:any){
    return this.http.get(`${this.url}/vessel/UserId/${id}`);
  }
  postPaymentByVesseId(id: number,body:any){
    return this.http.post(`${this.url}/vessel/${id}`,body);
  }
}
