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
import { VesselRegComponent } from './Pages/vessel-reg/vessel-reg.component';
import { SeaMenRegComponent } from './Pages/sea-men-reg/sea-men-reg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './common/navigation/navigation.component';
import { AlgaeRecordComponent } from './Pages/algae-record/algae-record.component';
import { AlgaeRegComponent } from './Pages/algae-reg/algae-reg.component';
import { SeaMenPDFComponent } from './Pages/sea-men-pdf/sea-men-pdf.component';
import { SeaMenRecordComponent } from './Pages/sea-men-record/sea-men-record.component';
import { SewedProComponent } from './Pages/sewed-pro/sewed-pro.component';
import { VesselPDFComponent } from './Pages/vessel-pdf/vessel-pdf.component';
import { VesselRecordComponent } from './Pages/vessel-record/vessel-record.component';
import { HeaderComponent } from './User/Common/header/header.component';
import { HeadersComponent } from './User/Common/headers/headers.component';
import { DashboardComponent } from './User/Pages/dashboard/dashboard.component';
import { TabsVesselComponent } from './Pages/tabs-vessel/tabs-vessel.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsFisherComponent } from './User/Pages/tabs-fisher/tabs-fisher.component';
import { TabVessComponent } from './User/Pages/tab-vess/tab-vess.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VesselRegComponent,
    SeaMenRegComponent,
    AlgaeRegComponent,
    // SewedProComponent,
    VesselPDFComponent,
    SeaMenPDFComponent,
    VesselRecordComponent,
    SeaMenRecordComponent,
    AlgaeRecordComponent,
    NavigationComponent,
    HeaderComponent,
    HeadersComponent,
    DashboardComponent,
    TabsVesselComponent,
    TabsFisherComponent,
    TabVessComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
