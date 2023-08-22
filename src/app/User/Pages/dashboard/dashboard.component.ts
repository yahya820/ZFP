import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';
import { TabsFisherComponent } from '../tabs-fisher/tabs-fisher.component';
import { FooterComponent } from '../../Common/footer/footer.component';
import { UserService } from 'src/app/Services/user/user.service';
import { MessageService } from 'src/app/Services/message/message.service';
import { AlgaeService } from 'src/app/Services/algae/algae.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  message!:any
  algae !:any
 // Replace this with your data array
  // dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['S/No', 'ward', 'no_farm', 'no_men', 'no_women', 'type', 'tones', 'date'];
  pageSizeOptions: number[] = [5, 10, 20];
  pageIndex: number = 0;
  pageSize: number = 5;
  totalItems!: number;
  
  constructor(public dialog: MatDialog,config: NgbModalConfig,
    private userService : UserService,
    private messageService:MessageService,
    private algaeService :AlgaeService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator ;

  ngOnInit(){
    this.userService.scrollEvent.subscribe(()=>{
      scroll();
    })
    this.algaeService.getAllByTime().subscribe(
      (respons:any) => {
        this.algae = new MatTableDataSource(respons);
        this.algae.paginator = this.paginator;
      }
    )

    this.messageService.getPublic().subscribe(
      response => {
        console.log(response)
        this.message = response;
      }
    )
  }
  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
  }
  ngOnDestroy(){
    this.userService.scrollEvent.unsubscribe();
  }
  scroll(){
    const element = document.querySelector('#contentElement');
    element?.scrollIntoView({behavior: 'smooth'});
  }

  

  openDialog() {
    const dialogRef = this.dialog.open(TabsFisherComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });


  //   open(content: any) {
  //     this.modalService.open(content);
  // }
  }

}



