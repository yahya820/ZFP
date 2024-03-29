import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
// 
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-apd-user',
  templateUrl: './apd-user.component.html',
  styleUrls: ['./apd-user.component.scss']
})
export class ApdUserComponent {
  id!: number;
  users!: any;
  form!:FormGroup;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ApdUserComponent>,){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.userService.getId(this.id).subscribe(response => {
      console.log("the Id is ",response)
    })

    this.form = new FormGroup({
      leader : new FormControl(null,[Validators.required])
    })
  }

  save(){
    // this.userService.update(this.id, this.form.value).subscribe ((response: any)=> {
    //   this.form.get("leader")?.setValue(response.leader)
    //   console.log("SuccessFull", response);
    // })
  }

  close(){
    this.dialogRef.close();
  }

}
