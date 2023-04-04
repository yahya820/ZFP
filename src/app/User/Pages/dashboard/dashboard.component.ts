import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'rxjs';
import { TabsFisherComponent } from '../tabs-fisher/tabs-fisher.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(public dialog: MatDialog,config: NgbModalConfig, private modalService: NgbModal) {
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
  weight: number;
  symbol: string;
  // action: string;
  // miter: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hdrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Hydogen', weight: 2.0079, symbol: 'o'},
  {position: 3, name: 'Hydrgen', weight: 3.0079, symbol: 'l'},
  {position: 4, name: 'Hydroen', weight: 4.0079, symbol: 'g'},
  {position: 5, name: 'Hydroen', weight: 4.0079, symbol: 'g'}


];
