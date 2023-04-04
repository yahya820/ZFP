import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './User/Common/headers/headers.component';
import { LoginComponent } from './User/Common/login/login.component';
// import { AlgaeComponent } from './User/pages/algae/algae.component';
import { DashboardComponent } from './User/Pages/dashboard/dashboard.component';
import { TabVessComponent } from './User/Pages/tab-vess/tab-vess.component';
import { TabsFisherComponent } from './User/Pages/tabs-fisher/tabs-fisher.component';
// import { NavbarComponent } from './common/navbar/navbar.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {
    path:"User",
    loadChildren :() => import ('./User/Modules/user/user.module').then ((m) => m.UserModule)
  },
  {
    path: "Admin",
    loadChildren: ()=> import('./Admin/Modules/admin/admin.module').then ((m)=> m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
