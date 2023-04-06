import { Component } from '@angular/core';

//es la parte mas pequeña de angular, tiene prop de i/o, qe es la manera de
//comunicarse con otros componentes
//tmb tiene un ciclo de vida

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';

  getName(): void {
    console.log('New app storage');
  }
}
