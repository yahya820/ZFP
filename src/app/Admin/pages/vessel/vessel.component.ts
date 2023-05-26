import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.scss']
})
export class VesselComponent {

  constructor(private router:Router){}
  tableData = [
    {id: 1, Name: 'John Doe', type_of_Vessel: "Town", owner: '20220101'},
    {id: 2, Name: 'Jane Doe', type_of_Vessel: "Kizimkazi", owner: '20220202'},
    // {id: 3, Name: 'Bob Smith', Address: 300, Phone_no: '20220303'},
    // {id: 4, Name: 'Alice Johnson', Address: 4, Phone_no: '20220404'},
  ];

  view(){
    this.router.navigate(['admin/view_vessel']);
  }

}
