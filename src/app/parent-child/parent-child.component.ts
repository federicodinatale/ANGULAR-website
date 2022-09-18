import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Output() mandaDatiEvento = new EventEmitter<string>();

  nome  = "Federico";

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  mandaDati() {
    this.mandaDatiEvento.emit(this.nome);
  }


}
