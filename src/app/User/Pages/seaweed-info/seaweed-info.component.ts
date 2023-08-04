import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersComponent } from '../../Common/headers/headers.component';

@Component({
  selector: 'app-seaweed-info',
  templateUrl: './seaweed-info.component.html',
  styleUrls: ['./seaweed-info.component.scss']
})
export class SeaweedInfoComponent {

  constructor(private router:Router,private headers:HeadersComponent){}

  mwaniOpen(){
    const token = sessionStorage.getItem("id")
    if(token){
      this.router.navigate(["seaweed"])
    } else { 
      this.headers.openDialog();
    }
  }

}
