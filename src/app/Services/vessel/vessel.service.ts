import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VesselService {

  private url = "http://localhost:8080/api/vi/vessel"
  constructor(private http: HttpClient) { }

  add(body:object){
    return this.http.post(`${this.url}`,body);
  }
  getByUserId(id:number){
    return this.http.get(`${this.url}/user/${id}`);
  }
  getAllVessel(){
    return this.http.get(`${this.url}`)
  }
  getAllVesselInProfile(){
    return this.http.get(`${this.url}/profile`);
  }
  getByVessel(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

}
