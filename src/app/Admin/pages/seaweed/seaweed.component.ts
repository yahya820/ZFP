import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Algae } from 'src/app/Model/Algae';
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
    private algaeService: AlgaeService,
    private modalService: NgbModal,){} 
  ngOnInit(){
    this.fetchAllalgae();
  }
  fetchAllalgae(){
    // this.algaeService.getAll().subscribe(response=> {
    //   this.algae = response;
    //   console.log(this.algae);
    // })
    this.algaeService.findAll().subscribe(
      response => {
        console.log(response)
        this.algae = response
      }
    )
  }

  view(){
    this.router.navigate(['/admin/view_seaweed']);
  }

  openBackDropCustomClass(edit: any) {
    this.modalService.open(edit, { size: 'xl', scrollable: true, backdropClass: 'light-blue-backdrop' });
  }

}
