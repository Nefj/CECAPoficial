import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BaseComponent } from './registro/base/base.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { ProgramaComponent } from './programa/programa.component';
import { EditPersonComponent } from './event/editPerson/editPerson.component';
import { ReportsComponent } from './reports/reports.component';

const appRoutes: Routes = [
   { path: '', component: HomeComponent },//ruta basica
   { path: 'login', component: LoginComponent },
   {
      path: 'home', component: HomeComponent,
      children: [
         { path: 'home', redirectTo: 'home', pathMatch: 'full' },
         { path: 'programa', component: ProgramaComponent },
         { path: 'registro', component: BaseComponent },
         { path: 'events', component: EventsComponent },
         { path: 'event/:id', component: EventComponent },
         { path: 'editPerson/:id', component: EditPersonComponent },
         { path: 'reports', component: ReportsComponent},
      ]

   },
   { path: 'registro', component: BaseComponent },
   { path: 'programa', component: ProgramaComponent },

   //{path: '', component: LoginFormComponent}
   { path: '**', component: HomeComponent }//ruta redir

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);