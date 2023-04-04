import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from '../../Common/headers/headers.component';
import { ContactComponent } from '../../Pages/contact/contact.component';
import { DashboardComponent } from '../../Pages/dashboard/dashboard.component';
import { SeawedProComponent } from '../../Pages/seawed-pro/seawed-pro.component';
import { TabVessComponent } from '../../Pages/tab-vess/tab-vess.component';
import { TabsFisherComponent } from '../../Pages/tabs-fisher/tabs-fisher.component';

const routes: Routes = [
  {path:"", component:HeadersComponent,
    children:[
       {path:"", component:DashboardComponent},
       {path:"tabs_vessel", component:TabVessComponent},
       {path:"tabs_fisher",  component:TabsFisherComponent},
       {path:"seaweed", component: SeawedProComponent},
        {path:"contact", component: ContactComponent},
     ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingRoutingModule { }
