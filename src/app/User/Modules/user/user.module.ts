import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../Pages/dashboard/dashboard.component';
import { SeawedProComponent } from '../../Pages/seawed-pro/seawed-pro.component';
import { TabVessComponent } from '../../Pages/tab-vess/tab-vess.component';
import { TabsFisherComponent } from '../../Pages/tabs-fisher/tabs-fisher.component';
import { MaterialModule } from 'src/app/Helpers/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingRoutingModule } from './user-routing-routing.module';
import { ContactComponent } from '../../Pages/contact/contact.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SeawedProComponent,
    TabVessComponent,
    TabsFisherComponent,
    ContactComponent,
  ],
  imports: [
    UserRoutingRoutingModule,
    CommonModule,
    MaterialModule,
    NgbModule,
  ]
})
export class UserModule { }
