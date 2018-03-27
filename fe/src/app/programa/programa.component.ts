import { Component, OnInit } from '@angular/core';
import { Programa } from '../modelo/programa';

@Component({
   selector: 'app-programa',
   templateUrl: './programa.component.html',
   styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
   public titulo = 'Listado de programas';
   public programa: Programa;
   public programasDef: Array<Programa>;
   public eventoPrograma: boolean;

   constructor() {
      // this.programa = new Programa('Gestion de Calidad', 'la la la la la', true);
      // this.programasDef = [
      //    new Programa('Plan de Negocios', 'Mas informacion del programa plan de negocios', false),
      //    new Programa('Maketing y Ventas', 'Mas informacion del programa marketing y ventas', true),
      //    new Programa('P. de RRHH', 'Mas informacion del programa RRHH', false)
      // ];

      this.eventoPrograma = true;
   }

   ngOnInit() {
      console.log(this.programa);
      console.log(this.programasDef);
   }

   ver(valor) {
      this.eventoPrograma = valor;
   }

}
