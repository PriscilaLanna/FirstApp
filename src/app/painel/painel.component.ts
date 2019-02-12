import { Component, OnInit, EventEmitter, Output , OnDestroy} from '@angular/core';
import { Frase} from '../shared/frase.model';
import { Frases } from './frase.mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao : string = "Traduza a frase:"
  public frases: Frase[] = Frases
  public resposta : string = ""

  public rodada : number = 0
  public rodadaFrase : Frase

  public progresso : number = 0
  public tentativas : number = 3

  @Output() public encerrarJogo : EventEmitter<string> =  new EventEmitter();
  
  constructor() { 
    this.atualizaRodada()   
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("destruido")
  }

  public atualizaResposta(resposta: Event): void {    
    this.resposta = (<HTMLInputElement>resposta.target).value       
  }

  public verificarResposta(): void{

    if(this.resposta == this.rodadaFrase.frasePtBr)
    {     
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)     
     
      if(this.rodada === this.frases.length){       
        this.encerrarJogo.emit("vitoria")
        alert("Concluído com sucesso!") 
        return
      }
    
      this.atualizaRodada()    
    }
    else
    {
      this.tentativas--
      
      if(this.tentativas === -1){       
        this.encerrarJogo.emit("derrota")      
        alert("Acabou as tentativas!")
      }
    }    
  }

  public atualizaRodada(): void{
    this.rodadaFrase =  this.frases[this.rodada]
    this.resposta =  ""
  }
}
