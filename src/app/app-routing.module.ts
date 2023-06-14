import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmFisherComponent } from './Admin/pages/confirm-fisher/confirm-fisher.component';
import { ConfirmVesselComponent } from './Admin/pages/confirm-vessel/confirm-vessel.component';
import { FisherRecComponent } from './Admin/pages/fisher-rec/fisher-rec.component';
import { HomeComponent } from './Admin/pages/home/home.component';
// import { NavBarComponent } from './Admin/pages/nav-bar/nav-bar.component';
import { NavigationComponent } from './Admin/pages/navigation/navigation.component';
import { UsersComponent } from './Admin/pages/users/users.component';
// import { VesselRecComponent } from './Admin/pages/vessel-rec/vessel-rec.component';
import { ViewFisherComponent } from './Admin/pages/view-fisher/view-fisher.component';
import { AuthGuard } from './common/admin_guard/auth.guard';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HeadersComponent } from './User/Common/headers/headers.component';
import { LoginComponent } from './User/Common/login/login.component';
import { AlgaeComponent } from './User/Pages/algae/algae.component';
import { ContactComponent } from './User/Pages/contact/contact.component';
// import { AlgaeComponent } from './User/pages/algae/algae.component';
import { DashboardComponent } from './User/Pages/dashboard/dashboard.component';
import { ProfileComponent } from './User/Pages/profile/profile.component';
import { RegisterComponent } from './User/Pages/register/register.component';
import { SeawedProComponent } from './User/Pages/seawed-pro/seawed-pro.component';
import { SeaweedComponent } from './Admin/pages/seaweed/seaweed.component';
import { TabVessComponent } from './User/Pages/tab-vess/tab-vess.component';
import { TabsFisherComponent } from './User/Pages/tabs-fisher/tabs-fisher.component';
import { VesselComponent } from './Admin/pages/vessel/vessel.component';
import { ViewUserComponent } from './Admin/pages/view-user/view-user.component';
import { ViewVesselComponent } from './Admin/pages/view-vessel/view-vessel.component';
import { FishermanComponent } from './Admin/pages/fisherman/fisherman.component';
import { ApdFishermanComponent } from './Admin/pages/apd-fisherman/apd-fisherman.component';
import { ApdVesselComponent } from './Admin/pages/apd-vessel/apd-vessel.component';
// import { SeaeweedRecComponent } from './Admin/pages/seaeweed-rec/seaeweed-rec.component';
import { ViewSeaweedComponent } from './Admin/pages/view-seaweed/view-seaweed.component';
import { CardFisherComponent } from './Admin/pages/card-fisher/card-fisher.component';
import { CardVesselComponent } from './Admin/pages/card-vessel/card-vessel.component';
import { LoginAdminComponent } from './Admin/common/login-admin/login-admin.component';
// import { HeadersComponent } from './Admin/pages/headers/headers.component';
// import { NavbarComponent } from './common/navbar/navbar.component';


const routes: Routes = [

{path:"login", component: LoginComponent},
{ path:"register", component: RegisterComponent},
{ path:"seawed", component: SeaweedComponent}   , 
{ path:"Login", component: LoginAdminComponent} ,              

  {
    path: '',
    component: HeadersComponent,
    children: [
	    { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: DashboardComponent },
      { path: 'tabs_vessel', component: TabVessComponent },
      { path:"tabs_fisher",  component:TabsFisherComponent},
      { path:"seaweed", component: SeawedProComponent},
      { path:"contact", component: ContactComponent},
      { path:"profile/{id}", component: ProfileComponent},
      { path:"algae", component: AlgaeComponent}

    ]
  },
  {
    path: 'admin',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path:'user', component: UsersComponent},
      { path: 'fisherman', component: FishermanComponent},
      { path: 'apd_fisherman', component: ApdFishermanComponent},
      { path: 'vessel', component: VesselComponent },
      { path: 'apd_vessel', component: ApdVesselComponent},
      { path:"view_fisher",  component:ViewFisherComponent},
      { path:"ConfirmVessel", component: ConfirmVesselComponent},
      { path:"ConfirmFisher", component: ConfirmFisherComponent},
      { path: "view_user", component: ViewUserComponent},
      { path: "view_vessel", component: ViewVesselComponent},
      { path: "seaweed", component: SeaweedComponent},
      { path: "view_seaweed", component: ViewSeaweedComponent},
      { path: "card_vessel", component: CardVesselComponent},
      { path: "card_fisher", component: CardFisherComponent},
    
    ],
  }


  // {path:"login", component: LoginComponent},
  // {
  //   path:"User",
  //   loadChildren :() => import ('./User/Modules/user/user.module').then ((m) => m.UserModule)
  // },
  // {
  //   path: "Admin",
  //   loadChildren: ()=> import('./Admin/Modules/admin/admin.module').then ((m)=> m.AdminModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
