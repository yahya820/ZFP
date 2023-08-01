import { Component } from '@angular/core';
import { MfanoService } from '../mfano.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfano',
  templateUrl: './mfano.component.html',
  styleUrls: ['./mfano.component.scss']
})
export class MfanoComponent {
  users:any
  constructor(private mfanoService:MfanoService,private router:Router){}

  ngOnInit(){
    this.mfanoService.getAll().subscribe(
      response =>{
        console.log(response)
        this.users = response;
      }
    )
  }
  view(id:number){
    this.router.navigate(['mfano',{id}]);
  }
}
