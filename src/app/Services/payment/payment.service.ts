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
  addPayment_Tab_vessel(body:any){
    return this.http.post(`${this.url}/tab_vessel`,body);
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
  postPaymentByVesseId(id: any,body:any){
    return this.http.post(`${this.url}/vessel/${id}`,body);
  }
  getPaymentFishermanByDate(startDate:any,endDate:any){
    return this.http.get(`${this.url}/fisherman/getPaymentByDate/${startDate}/${endDate}`)
  }
  getAllPaymentInVessel(){
    return this.http.get(`${this.url}/vessel/getAllPayment`);
  }
  getPaymentVesselByDate(startDate:any,endDate:any){
    return this.http.get(`${this.url}/vessel/${startDate}/${endDate}`)
  }
  getVesselCount(){
    return this.http.get(`${this.url}/vessel/count`)
  }
  getFishermanCount(){
    return this.http.get(`${this.url}/fisherman/count`)
  }
}
