import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-fisher-rec',
  templateUrl: './fisher-rec.component.html',
  styleUrls: ['./fisher-rec.component.scss']
})
export class FisherRecComponent {

  tableData = [
    {id: 1, name: 'John Doe', payment: 100, date: '2022-01-01'},
    {id: 2, name: 'Jane Doe', payment: 200, date: '2022-02-02'},
    {id: 3, name: 'Bob Smith', payment: 300, date: '2022-03-03'},
    {id: 4, name: 'Alice Johnson', payment: 400, date: '2022-04-04'},
  ];
}
