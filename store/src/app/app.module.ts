import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    //inyectamos componentes y directivas
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    //los modulos de angular que necesitemos, los formularios, propios modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [], //aca inyectamos las dependencias, los servicios
  bootstrap: [AppComponent], //solo esta en el modulo principal
  exports: [], //componentes que querramos exponer a otros modulos
})
export class AppModule {}
