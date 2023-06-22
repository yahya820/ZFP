import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Algae } from 'src/app/Services/algae/Algae';
import { AlgaeService } from 'src/app/Services/algae/algae.service';

@Component({
  selector: 'app-seaweed',
  templateUrl: './seaweed.component.html',
  styleUrls: ['./seaweed.component.scss']
})
export class SeaweedComponent {
  dataSource = new MatTableDataSource();
  algae:any;
  constructor( private router:Router,
    private algaeService: AlgaeService){} 
  ngOnInit(){
    this.fetchAllalgae();
  }
  fetchAllalgae(){
    this.algaeService.getAll().subscribe(response=> {
      this.algae = response;
      console.log(this.algae);
    })
  }

  view(){
    this.router.navigate(['/admin/view_seaweed']);
  }

}
