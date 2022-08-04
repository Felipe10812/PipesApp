import { Component } from '@angular/core';
import { color, heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: color.negro
    },
    {
      nombre: 'Lintena verde',
      vuela: true,
      color: color.verde
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: color.azul
    },
    {
      nombre: 'Daredavil',
      vuela: false,
      color: color.rojo
    },
  ];

  // Datos para la siguiente tabla o si no afectaba a todos los datos
  superPersona: heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: color.negro
    },
    {
      nombre: 'Lintena verde',
      vuela: true,
      color: color.verde
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: color.azul
    },
    {
      nombre: 'Daredavil',
      vuela: false,
      color: color.rojo
    },
  ];

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
    console.log(this.enMayusculas)
  };

  cambiarOrden (valor: string){
    this.ordenarPor = valor;
  };

}
