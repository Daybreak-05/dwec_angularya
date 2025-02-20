import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.component.html',
  styleUrls: ['./temporizador.component.css']
})
export class TemporizadorComponent implements OnInit {

    ngOnInit(): void {
      this.contador = this.valorInicial;
  }
  
    title = 'Temporizador';
    @Input() valorInicial:number= 10;
    @Input() nombre="";
  
    contador: any;
  
    //Nuestro evento se llama 'finalCountdown'
    @Output()  finalCountdown = new EventEmitter<string>();
    start(){
      this.contador = this.valorInicial;
      this.contador = setInterval(() => {
        this.contador--;
      if(this.contador <=0){
        this.finalCountdown.emit(this.nombre); //Lanzamos el evento 'finalCountdown'
        clearInterval(this.contador); //Detenemos el temporizador
      }
      },1000);
    }
  }