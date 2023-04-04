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
import { AdminModule } from './Admin/Modules/admin/admin.module';
import { ViewFisherComponent } from './Admin/pages/view-fisher/view-fisher.component';
import { ViewVesselComponent } from './Admin/pages/view-vessel/view-vessel.component';
import { ConfirmVesselComponent } from './Admin/pages/confirm-vessel/confirm-vessel.component';
import { ConfirmFisherComponent } from './Admin/pages/confirm-fisher/confirm-fisher.component';
import { ContactComponent } from './User/Pages/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadersComponent,
    LoginComponent,
    ViewFisherComponent,
    ViewVesselComponent,
    ConfirmVesselComponent,
    ConfirmFisherComponent,



  ],
  imports: [
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
    UserModule,
    AdminModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
