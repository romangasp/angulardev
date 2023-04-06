import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [MatToolbarModule], //todos los modulos que nosotros exportemos estarn disponibles para toda la aplicacion
})
export class MaterialModule {}
