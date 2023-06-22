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
import { User } from 'src/app/Services/user/User';
import { TabVessComponent } from '../../Pages/tab-vess/tab-vess.component';
import { MatTabGroup } from '@angular/material/tabs';
import { AuthGuard } from 'src/app/common/user_guard/auth.guard';
import { ModelGuard } from 'src/app/common/model_guard/model.guard';
// import { User } from 'src/app/Services/user/User';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {
  username! : any;
  form1!: FormGroup;
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
    private modalService: NgbModal,
    private router:Router,
    private userServices: UserService,
    private auth:ModelGuard) {

    }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

  }
  openDialog1(chombo:any) {
    if(this.auth.canActivate()){
      this.modalService.open(chombo, { scrollable: true, backdropClass: 'light-blue-backdrop' });
    }else{
      this.openDialog();
    }
  }

  openScroll(content : TemplateRef<any>){
    this.offcanvasService.open(content, { scroll: true, panelClass: 'bg-info'});
  }

  openBackDropCustomClass(tempa: any) {
     if(this.auth.canActivate()){
      this.modalService.open(tempa, { scrollable: true, backdropClass: 'light-blue-backdrop' });
     } else {
      this.openDialog();
     }
	}

  ngOnInit(){

    this.username = sessionStorage.getItem("name")
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      pass : new FormControl(null,[Validators.required])
    });

    this.form1 = new FormGroup({

      // BInafsi
      // image : new FormControl(null,[Validators.required]),
      diko_usage : new FormControl(null,[Validators.required]),
      ways : new FormControl(null,[Validators.required]),
      meter : new FormControl(null,[Validators.required]),
      type : new FormControl(null,[Validators.required]),


      // // chombo
      // chombo : new FormControl(null,[Validators.required]),
      // aina : new FormControl(null,[Validators.required]),
      // no : new FormControl(null,[Validators.required]),
      // urefu : new FormControl(null,[Validators.required]),
      // idadi : new FormControl(null,[Validators.required]),
      // njia : new FormControl(null,[Validators.required]),
      // terehe : new FormControl(null,[Validators.required]),


      // malipo
      acc : new FormControl(null,[Validators.required]),
      // no_ac : new FormControl(null,[Validators.required]),
      no_risiti : new FormControl(null,[Validators.required]),
      date : new FormControl(null,[Validators.required]),
      // risiti : new FormControl(null,[Validators.required])

    })

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
  onSubmit(){
      
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
      this.router.navigateByUrl("/profile/{id}")
    }else{
       this.openDialog();
    }
  }

  mwaniOpen(){
    const token = sessionStorage.getItem("id")
    if(token){
      this.router.navigate(["seaweed"])
    } else { 
      this.openDialog();
    }
  }

  
  close_session(){
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name")
    // this.router.navigate(['/'])
  }
}
