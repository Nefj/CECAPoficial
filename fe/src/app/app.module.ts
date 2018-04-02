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
import { PersonaComponent } from './registro/persona/persona.component';
import { BaseComponent } from './registro/base/base.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { ProgramaComponent } from './programa/programa.component';

//Services
import { UserService} from './services/user.service';
import { SearchPipe } from './event/filtro/filtropersona.pipe';


import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './registro/form/form.component';
import { AddProgramComponent } from './events/addProgram/addProgram.component';
import { AddEventComponent } from './events/addEvent/addEvent.component';
import { AddPersonComponent } from './event/addPerson/addPerson.component';
import { EditPersonComponent } from './event/editPerson/editPerson.component';

import { Form2Component } from './registro/form2/form2.component';

import { FormProgramaComponent } from './form-programa/form-programa.component';
import { AddEjecutivoComponent } from './events/add-ejecutivo/add-ejecutivo.component';

//Graphics
import { ChartsModule } from 'ng2-charts';
import { ReportsComponent } from './reports/reports.component';
import { LineaComponent } from './reports/linea/linea.component';
import { BarraComponent } from './reports/barra/barra.component';
<<<<<<< HEAD
import { TortaComponent } from './reports/torta/torta.component';
import { ReportTrimestralComponent } from './report-trimestral/report-trimestral.component';
=======
import { TortaComponent } from './reports/torta/torta.component';
import { AddCarteraComponent } from './events/add-cartera/add-cartera.component';
>>>>>>> c9211321b18adcda0bc99206a4c1f872c830e005

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    PersonaComponent,
    BaseComponent,
    EventsComponent,
    EventComponent,
    FormComponent,
    AddProgramComponent,
    AddEventComponent,
    AddPersonComponent,
    EditPersonComponent,
    ProgramaComponent,
    Form2Component,
    FormProgramaComponent,
    
    ReportsComponent,
    ReportTrimestralComponent,
    LineaComponent,
    BarraComponent,
    TortaComponent,
<<<<<<< HEAD
=======
    SearchPipe, 
>>>>>>> c9211321b18adcda0bc99206a4c1f872c830e005
    
    SearchPipe,
    AddEjecutivoComponent,
    
<<<<<<< HEAD
=======
    AddCarteraComponent,
>>>>>>> c9211321b18adcda0bc99206a4c1f872c830e005
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
    UserService
  ],//aniadir appRo..
  bootstrap: [AppComponent]
})
export class AppModule { }
