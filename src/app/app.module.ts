import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Helpers/material/material.module';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadersComponent } from './User/Common/headers/headers.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './User/Common/login/login.component';
import { UserModule } from './User/Modules/user/user.module';
// import { AdminModule } from './Admin/Modules/admin/admin.module';
import { ViewFisherComponent } from './Admin/pages/view-fisher/view-fisher.component';
import { ViewVesselComponent } from './Admin/pages/view-vessel/view-vessel.component';
import { ConfirmVesselComponent } from './Admin/pages/confirm-vessel/confirm-vessel.component';
import { ConfirmFisherComponent } from './Admin/pages/confirm-fisher/confirm-fisher.component';
import { ContactComponent } from './User/Pages/contact/contact.component';
import { NavigationComponent } from './Admin/pages/navigation/navigation.component';
import { FooterComponent } from './User/Common/footer/footer.component';
import { ProfileComponent } from './User/Pages/profile/profile.component';
import { RegisterComponent } from './User/Pages/register/register.component';
import { AlgaeComponent } from './User/Pages/algae/algae.component';
import { HomeComponent } from './Admin/pages/home/home.component';
import { UsersComponent } from './Admin/pages/users/users.component';
// import { NavBarComponent } from './Admin/pages/nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { VesselComponent } from './Admin/pages/vessel/vessel.component';
import { ViewUserComponent } from './Admin/pages/view-user/view-user.component';
import { HttpClientModule } from '@angular/common/http';
// import { FishermanComponent } from './Admin/pages/fisherman/fisherman.component';
import { ApdFishermanComponent } from './Admin/pages/apd-fisherman/apd-fisherman.component';
import { ApdVesselComponent } from './Admin/pages/apd-vessel/apd-vessel.component';
import { SeaweedComponent } from './Admin/pages/seaweed/seaweed.component';
import { ViewSeaweedComponent } from './Admin/pages/view-seaweed/view-seaweed.component';
import {NgxPrintModule} from 'ngx-print';
import { CardFisherComponent } from './Admin/pages/card-fisher/card-fisher.component';
import { CardVesselComponent } from './Admin/pages/card-vessel/card-vessel.component';
import { ApdUserComponent } from './Admin/pages/apd-user/apd-user.component';
import { LoginAdminComponent } from './Admin/common/login-admin/login-admin.component';
import { AdminMessageComponent } from './Admin/pages/admin-message/admin-message.component';
import { ImageComponent } from './image/image.component'
import { FishermanComponent } from './Admin/pages/fisherman/fisherman.component';
import { ViewFishermanComponent } from './Admin/pages/view-fisherman/view-fisherman.component';
import { MfanoComponent } from './Services/mfano/mfano.component';
import { MfanoiDComponent } from './Services/mfanoi-d/mfanoi-d.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFishermanComponent } from './Admin/pages/payment-fisherman/payment-fisherman.component';
import { PaymentVesselComponent } from './Admin/pages/payment-vessel/payment-vessel.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SeaweedInfoComponent } from './User/Pages/seaweed-info/seaweed-info.component';
import { LawsComponent } from './User/Pages/laws/laws.component';
import { VesselManyComponent } from './User/Pages/vessel-many/vessel-many.component';
// import { AdminModule } from './Admin/Modules/admin/admin.module';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AlgaeComponent,
    AppComponent,
    NavbarComponent,
    HeadersComponent,
    LoginComponent,
    ViewFisherComponent,
    ViewVesselComponent,
    ConfirmVesselComponent,
    ConfirmFisherComponent,
    NavigationComponent,
    FooterComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    // NavBarComponent,
    VesselComponent,
    ViewUserComponent,
    FishermanComponent,
    ApdFishermanComponent,
    ApdVesselComponent,
    SeaweedComponent,
    ViewSeaweedComponent,
    CardFisherComponent,
    CardVesselComponent,
    ApdUserComponent,
    LoginAdminComponent,
    AdminMessageComponent,
    ImageComponent,
    ViewFishermanComponent,
    MfanoComponent,
    MfanoiDComponent,
    PaymentFishermanComponent,
    PaymentVesselComponent,
    SeaweedInfoComponent,
    LawsComponent,
    VesselManyComponent,



  ],
  imports: [
    NgbAccordionModule,
    NgbDropdownModule,
    NgxPrintModule,
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule,
    MatTabsModule,
    // UserModule,
    // AdminModule,
    // CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
