import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';
import { TabsFisherComponent } from '../tabs-fisher/tabs-fisher.component';
import { FooterComponent } from '../../Common/footer/footer.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(public dialog: MatDialog,config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  // action: string;
  // miter: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Kilindi', symbol: "Kaskazini A", weight: 'Kaskazini Unguja'},
  {position: 2, name: 'kidoti', symbol: "Kaskazini A", weight: 'Kaskazini Unguja'},
  {position: 3, name: 'Chwaka', symbol: "Kati", weight: 'Kusini Unguja'},
  {position: 4, name: 'Fundo', symbol: "Wete", weight: 'Kusini Pemba'},
  {position: 5, name: 'Michezani', symbol: "Mkoani", weight: 'Kusini Pemba'}


];
