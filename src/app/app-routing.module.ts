import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './common/navigation/navigation.component';
import { AlgaeRecordComponent } from './Pages/algae-record/algae-record.component';
import { SeaMenRecordComponent } from './Pages/sea-men-record/sea-men-record.component';
import { SewedProComponent } from './Pages/sewed-pro/sewed-pro.component';
import { TabsVesselComponent } from './Pages/tabs-vessel/tabs-vessel.component';
import { VesselRecordComponent } from './Pages/vessel-record/vessel-record.component';
import { HeadersComponent } from './User/Common/headers/headers.component';
import { DashboardComponent } from './User/Pages/dashboard/dashboard.component';
import { TabVessComponent } from './User/Pages/tab-vess/tab-vess.component';
import { TabsFisherComponent } from './User/Pages/tabs-fisher/tabs-fisher.component';
// import { NavbarComponent } from './common/navbar/navbar.component';


const routes: Routes = [

  {path:"", component:HeadersComponent,
    children:[
       {path:"", component:DashboardComponent}
    ]
  },
  {path: "tabs_fisher",  component:TabsFisherComponent},
  {path: "tabs_vessel" , component:TabVessComponent}

// {path:"navbar",  component: NavbarComponent},
// {path:"", component: NavigationComponent,
//   children: [
//     {path:"",component: DashboardComponent},
//     {path:"algae-record", component: AlgaeRecordComponent},
//     {path:"vessel-record", component: VesselRecordComponent},
//     {path:"seamen-record", component: SeaMenRecordComponent},
//     {path:"seawed-record", component: SewedRecordComponent}
//   ]
// },
// {path:"sewedpro", component: SewedProComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
