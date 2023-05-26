import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlgaeComponent } from '../algae/algae.component';

@Component({
  selector: 'app-seawed-pro',
  templateUrl: './seawed-pro.component.html',
  styleUrls: ['./seawed-pro.component.scss']
})
export class SeawedProComponent {
  form!:FormGroup;
  constructor(public dialog: MatDialog,
    private Router: Router) {}

  ngOnInit(){
    this.form = new FormGroup({
      number : new FormControl([null,Validators.required])
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlgaeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onSubmit(){
    this.Router.navigateByUrl("/algae")
  }

}
