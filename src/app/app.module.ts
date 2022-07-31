import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Modulo personalizado
// PrimeNgModule se puede eliminar en esta seccion pero no lo hago por que da lo mismo 
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common'
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,

    // Tambien es necesario importarlo para que reconozca el ng en los demas modulos 
    VentasModule,
  ],
  exports: [

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
