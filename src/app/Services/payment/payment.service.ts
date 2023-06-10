import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url = "http://localhost:8080/api/vi/payment"
  constructor(private http:HttpClient) { }
  add(body:object){
    return this.http.post(`${this.url}`,body);
  }
}
