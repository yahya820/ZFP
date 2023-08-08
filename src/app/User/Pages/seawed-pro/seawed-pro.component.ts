import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlgaeComponent } from '../algae/algae.component';
import { User } from 'src/app/Model/User';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/Services/user/user.service';
import { LocationService } from 'src/app/Services/location/location.service';
import { Algae } from 'src/app/Model/Algae';
import { AlgaeService } from 'src/app/Services/algae/algae.service';

@Component({
  selector: 'app-seawed-pro',
  templateUrl: './seawed-pro.component.html',
  styleUrls: ['./seawed-pro.component.scss']
})
export class SeawedProComponent {
  id!:number
  form!:FormGroup;
  location : any
  algae_model : Algae = new Algae();
  constructor(public dialog: MatDialog,
    private router: Router,
    private locationService:LocationService,
    private route:ActivatedRoute,
    private algaeService:AlgaeService) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.locationId();
    this.form = new FormGroup({
      number : new FormControl(null,[Validators.required])
    })
  }

  locationId(){
    this.locationService.getById(this.id).subscribe(
      response => {
        this.location = response
        console.log(this.location)
        const id = this.location.locationid
        console.log(id)
      }
    )
    
  }

  submit(){
    this.algae_model.locationid = this.location.locationid
    this.algaeService.add(this.algae_model).subscribe(
      response => {
        console.log("alage =>",response)
        this.router.navigate(["seaweed"])
      }
    ),Swal.fire({
      title : "Umezifisha Taarifa zako Kikamilifu",
      icon: "success"
    })
  }

}
