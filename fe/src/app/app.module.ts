import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import{ routing, appRoutingProviders } from './app.routing';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppheaderComponent } from './plantilla/appheader/appheader.component';
import { AppfooterComponent } from './plantilla/appfooter/appfooter.component';
import { AppmenuComponent } from './plantilla/appmenu/appmenu.component';
import { AppsettingsComponent } from './plantilla/appsettings/appsettings.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { PersonaComponent } from "./event/persona/persona.component"


//Services
import { UserService} from './services/user.service';
import { SearchPipe } from './event/filtro/filtropersona.pipe';
import { FilterPipe } from "./event/persona/filter.pipe";
import { FileUploadClientService } from "./services/fileclient.service";



import {HttpClientModule} from '@angular/common/http';
import { AddProgramComponent } from './events/addProgram/addProgram.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';
import { AddPersonComponent } from './event/addPerson/addPerson.component';
import { EditPersonComponent } from './event/editPerson/editPerson.component';
import { AddEjecutivoComponent } from './events/add-ejecutivo/add-ejecutivo.component';

//Graphics
import { ChartsModule } from 'ng2-charts';
import { ReportsComponent } from './reports/reports.component';
import { BarraComponent } from './reports/barra/barra.component';
import { LineaComponent } from './reports/linea/linea.component';
import { TortaComponent } from './reports/torta/torta.component';
import { ReportTrimestralComponent } from './report-trimestral/report-trimestral.component';
import { BarComponent } from './report-trimestral/bar/bar.component';
import { ReportEventComponent } from './report-event/report-event.component';
import { BarEventComponent } from './report-event/bar-event/bar-event.component';

import { AddCarteraComponent } from './cartera/add-cartera/add-cartera.component';
import { CarteraComponent } from './cartera/cartera.component';
import { InfoCarteraComponent } from './cartera/info-cartera/info-cartera.component';
import { EditCarteraComponent } from './cartera/edit-cartera/edit-cartera.component';

import { EjecutivoComponent } from './ejecutivo/ejecutivo.component';
import { EditEjecutivoComponent } from './ejecutivo/edit-ejecutivo/edit-ejecutivo.component';

import { EditComponent } from './event/persona/edit/edit.component';
import { ImportWhatsNumbersComponent } from './import-whats-numbers/import-whats-numbers.component';
import { ImportFromExcelComponent } from './import-from-excel/import-from-excel.component';
import { StatusCreateComponent } from './status-create/status-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    EventsComponent,
    EventComponent,
    AddProgramComponent,
    AddEventComponent,
    AddPersonComponent,
    PersonaComponent,
    EditPersonComponent,
    
    ReportsComponent,
    ReportTrimestralComponent,
    ReportEventComponent,
    LineaComponent,
    BarraComponent,
    TortaComponent,
    BarComponent,
    BarEventComponent,
    
    SearchPipe,
    AddEjecutivoComponent,
    AddCarteraComponent,
    CarteraComponent,
    InfoCarteraComponent,
    EditCarteraComponent,
    EjecutivoComponent,
    EditEjecutivoComponent,
    EditComponent,
    FilterPipe,
    ImportWhatsNumbersComponent,
    ImportFromExcelComponent,
    StatusCreateComponent,
  ],
  imports: [
    BrowserModule,
    AsyncLocalStorageModule,
    routing,//aniadir routing
    HttpClientModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    
  ],
  providers: [
    appRoutingProviders,
    UserService,
    FilterPipe,
    FileUploadClientService,
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }