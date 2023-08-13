import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import {DatePipe} from '@angular/common'
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Dialog } from '@angular/cdk/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
// import { User } from 'src/app/Services/user/User';
import Swal from 'sweetalert2';
import { User } from 'src/app/Model/User';
import { TabVessComponent } from '../../Pages/tab-vess/tab-vess.component';
import { MatTabGroup } from '@angular/material/tabs';
import { AuthGuard } from 'src/app/common/user_guard/auth.guard';
import { ModelGuard } from 'src/app/common/model_guard/model.guard';
import { FishermanService } from 'src/app/Services/fisherman/fisherman.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';
import { PaymentFisherman } from 'src/app/Model/PaymentFisherman';
import { fisherman } from 'src/app/Model/Fisherman';
import { Vessel } from 'src/app/Model/Vessel';
import { VesselService } from 'src/app/Services/vessel/vessel.service';
import { PaymentVessel } from 'src/app/Model/PaymentVessel';
// import { User } from 'src/app/Services/user/User';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {
  token = sessionStorage.getItem("id")
  vessel2:any
  fihserman2: any
  username! : any;
  form1!: FormGroup;
  malipoForm!:FormGroup;
  check_login:boolean = true;
  error:boolean = false;
 user: any
  form!: FormGroup;
  closeResult!: string;

  currentDate = new Date();
  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private offcanvasService : NgbOffcanvas,
    private router:Router,
    private userServices: UserService,
    private auth:ModelGuard,
    private fishermanService:FishermanService,
    private paymentService:PaymentService,
    private vesselService:VesselService) {

    }
    display (){

    }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }
  

  openScroll(content : TemplateRef<any>){
    this.offcanvasService.open(content, { scroll: true, panelClass: 'bg-info'});
  }

  

  ngOnInit(){
    
    this.username = sessionStorage.getItem("name")
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      pass : new FormControl(null,[Validators.required])
    });

    // this.form1 = new FormGroup({
    //   // BInafsi
    //   // image : new FormControl(null,[Validators.required]),
    //   // fishermanId: new FormControl(sessionStorage.getItem("id")),
    //   diko_usage : new FormControl(null,[Validators.required]),
    //   ways : new FormControl(null,[Validators.required]),
    //   meter : new FormControl(null,[Validators.required]),
    //   type : new FormControl(null,[Validators.required]),
    //   userId : new FormControl(null),
    // })
    
    // this.malipoForm = new FormGroup({
    //     // malipo
    //     acc_name : new FormControl(null,[Validators.required]),
    //     // no_ac : new FormControl(null,[Validators.required]),
    //     receipt_no : new FormControl(null,[Validators.required]),
    //     date : new FormControl(null,[Validators.required]),
    //     // risiti : new FormControl(null,[Validators.required])
    //     // fishermanId : new FormControl(null)
    // })
}


  view(){
    this.router.navigate(["/register"])
  }
  close(){
    this.offcanvasService.dismiss();
  }
  scroll(){
    this.userServices.scrollEvent.emit();
  }
  onSubmitVessel(){
  }
  Submit(){
    const values = this.form1.value;
    if (this.userServices.add(values).subscribe((response)=>{
      console.log(response);
    })){
      Swal.fire({
        title: 'Registration Successful',
        // text: 'You have been registered as an admin',
        icon: 'success'
      }).then (()=> {
        this.router.navigate(['/menu'])
      });
    }
    
  }

  profile(){
    const token = sessionStorage.getItem("id")
    if(token){
      this.router.navigateByUrl("/profile")
    }else{
       this.openDialog();
    }
  }

  

  
  close_session(){
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("fishermanId")
    window.location.reload()
    // this.router.navigate(['/'])
  }
  
}
