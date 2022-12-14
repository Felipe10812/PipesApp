import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { mayusculasPipe } from './pipes/mayusculas.pipe';
import { vuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


@NgModule({
  declarations: [
    // Componentes
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    // Pipes
    mayusculasPipe,
    vuelaPipe,
    OrdenarPipe,
  ],
  // Cuando se usan los componentes fuera del modulo de ventas se deben exportar 
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,

    //Necesario importarlo para que el ng funciones en el proyecto
    PrimeNgModule,
  ]
})
export class VentasModule { }
