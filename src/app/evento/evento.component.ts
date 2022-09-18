
// evento.component.ts
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  onClick(e: any) {
    console.log("ho cliccato");
    console.log(e);
  }



// evento.component.ts
  onInput(e: Event) {

    console.log((<HTMLInputElement>e.target).value);

  }

}
