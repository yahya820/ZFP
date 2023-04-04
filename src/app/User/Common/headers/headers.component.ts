import { Component, TemplateRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import {DatePipe} from '@angular/common'
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent {

  currentDate = new Date();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private offcanvasService : NgbOffcanvas) {

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

}
