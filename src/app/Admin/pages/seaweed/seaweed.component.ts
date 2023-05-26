import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seaweed',
  templateUrl: './seaweed.component.html',
  styleUrls: ['./seaweed.component.scss']
})
export class SeaweedComponent {
  constructor( private router:Router){}
  tableData = [
    // {id: 1, Name: 'John Doe', Address: "Town", Phone_no: '20220101'},
    // {id: 2, Name: 'Jane Doe', Address: "Kizimkazi", Phone_no: '20220202'},
    // {id: 3, Name: 'Bob Smith', Address: 300, Phone_no: '20220303'},
    // {id: 4, Name: 'Alice Johnson', Address: 4, Phone_no: '20220404'},
  ];

  view(){
    this.router.navigate(['/admin/view_seaweed']);
  }

}
