import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  constructor() { }

  @Input() public progresso : number 

  ngOnInit() {
  }

 
}
