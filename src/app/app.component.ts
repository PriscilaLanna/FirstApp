import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento : boolean = true
  public tipoEncerrramento: string

  public encerrarJogo(tipo : string) : void{
    console.log(tipo)
    this.jogoEmAndamento = false
    this.tipoEncerrramento = tipo
  }

  public jogarNovamente() : void{
    this.jogoEmAndamento = true
    this.tipoEncerrramento = undefined
  }
}
