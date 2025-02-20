import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto005';

  finalCuentaAtras(nombre: string) {
    alert(`Temporizador ${nombre} finalizado`);
  }
}