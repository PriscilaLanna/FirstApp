import {Component} from '@angular/core'

@Component({
    selector:'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
    // template: `<p>Template in line </p>
    //             <p>com quebra de linha </p>
    //         `   
    // styles:[`
    //         .exemploStyleInLine{
    //             color: red;
    //         }
    // `]
    
    
})

export class TopoComponent{
    public titulo : string = "Aprendendo Inglês"
}