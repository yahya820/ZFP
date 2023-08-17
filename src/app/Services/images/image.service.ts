import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public baseUrl = 'http://localhost:8080/api/images';

  constructor(private httpClient: HttpClient) { }
  
  public uploadImage(formData: FormData): Observable<any> {
  const file = formData.get('file') as File;
  const url = this.baseUrl + `/upload?file=${file.name}`;
  return this.httpClient.post(url, formData , {responseType: 'text'});
  }

  uploadReceipts(id:any,data:any){
    return this.httpClient.post(`${this.baseUrl}/upload/${id}`,data);
  }
  getReceipts(booking_id:any):Observable<any>{
    return this.httpClient.get(this.baseUrl + "/get/image/info/" + booking_id);
   }
}
