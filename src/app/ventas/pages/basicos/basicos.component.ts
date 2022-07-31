import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string= 'felipe';
  nombreUpper: string= 'FELIPE';
  nombreCompleto: string= 'fElIpE';

  fecha: Date = new Date(); //El dia de hoy

}
