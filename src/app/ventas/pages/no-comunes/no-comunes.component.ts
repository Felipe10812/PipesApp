import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Felipe';
  genero: string = 'masculino';

  saludoMapa = {
    'masculino': 'aburrido',
    'femenino': 'aburrida',
  }

  // i18nPlural
  clientes: string[] = ['Francisco', ' Maria', ' Juan'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 cliente esperando',
    '=3': 'tenemos 3 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarClinete() {
    this.nombre = 'Rosa';
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop()
  }

  // Keyvalue Pipe
  persona = {
    nombre: ' Felipe',
    edad: 22,
    direccion: ' Nuevo Leon, Mexico'
  }

  // Json pipes
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async pipe
  miObservable = interval(1000); //0,1,2,3

  valorPromesa = new Promise ((resolve, reject)=>{
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  })
}
