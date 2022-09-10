import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit, DoCheck, OnDestroy {

  cane = [
    {
      nome: "Roger",
      razza: "golden",
      descrizione: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting"
    }
  ]


  constructor() {
    console.log("contruct");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
