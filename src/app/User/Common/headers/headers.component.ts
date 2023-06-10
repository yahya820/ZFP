import { Component, TemplateRef } from '@angular/core';
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
// import { User } from 'src/app/Services/user/User';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {
  username! : any;
  check_login:boolean = true;
  error:boolean = false;
 user: User = new User()
  form!: FormGroup;
  closeResult!: string;

  currentDate = new Date();

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
    private userServices: UserService,) {

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

  openBackDropCustomClass(tempa: any) {
		this.modalService.open(tempa, { size: 'md', backdropClass: 'light-blue-backdrop' });
	}

  ngOnInit(){
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      pass : new FormControl(null,[Validators.required])
    });

    // this.username = sessionStorage.getItem(this.user.name = ")
    // if( this.username == null){
    //   this.check_login = false
    //   this.error = true
    // }
  }
  view(){
    this.router.navigate(["/register"])
  }

  // administrator(){
  //   this.router.navigate(["/Login"]);
  // }

  // Login_process(name:any,pass:any){
    
  // }

  Login(){
    const value = this.form.value
    return this.userServices.login(value.name, value.pass).subscribe (
      respo => {
        // console.log(respo);
        console.log( sessionStorage.setItem("name", respo.name));
        if (respo.roles == "USER"){
          this.router.navigate(["/menu"])
        } else {
          this.router.navigate(["/admin/home"])
        }
      }
    )
  }

}
