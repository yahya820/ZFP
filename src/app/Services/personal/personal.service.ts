import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
 Url!: "http://localhost:8080/personal"
  constructor(private http:HttpClient) { }

  AddInfo(data:object){
    return this.http.post(this.Url + "/post",data);
  }
}
