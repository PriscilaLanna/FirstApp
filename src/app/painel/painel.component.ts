import { Component, OnInit } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { Frases } from './frase.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao : string = "Traduza a frase:"
  public frases: Frase[] = Frases
  public resposta : string 

  public rodada : number = 0
  public rodadaFrase : Frase
  
  constructor() { 
    this.rodadaFrase =  this.frases[this.rodada]
    console.log(this.frases[this.rodada])
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {    
    this.resposta = (<HTMLInputElement>resposta.target).value    
    //console.log(this.resposta)
  }

  public verificarResposta(): void{

    if(this.resposta == this.rodadaFrase.frasePtBr)
    {     
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]
      

      alert("Resposta correta!")
    }
    else
    {alert("Resposta errada!")}

    console.log(this.resposta);
  }
}
