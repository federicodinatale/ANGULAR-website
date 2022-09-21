import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{


  colore = "";

  coloreEvidenzia(colore: string) {
    this.colore = colore
  }

  @ViewChild('inputSaluti') valoreInput! : ElementRef<HTMLInputElement>

  ngOnInit(): void {
    console.log("ngOnInit");
    console.log(this.valoreInput);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log(this.valoreInput);
  }

  onClick() {
    console.log(this.valoreInput.nativeElement.value);
  }



  title = 'Corso Angular';

  persone = [
    {nome: "Fede", cognome : "Dina"},
    {nome: "Mario", cognome : "Rossi"},
    {nome: "Luca", cognome : "Verdi"},
  ]

  // onClick() {
  //   this.persone = [
  //     {nome: "Francesco", cognome : "Dina"},
  //     {nome: "Marti", cognome : "Rossi"},
  //     {nome: "Alessio", cognome : "Verdi"},
  //   ]
  // }

  onRiceviDati(value: string) {
    console.log(value);

  }


  value = "CIAO"




}


