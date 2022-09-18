import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title = "Corso Angular"
  constructor() { }

  ngOnInit(): void {
  }

  onInput(e: Event) {
    this.title = (<HTMLInputElement>e.target).value;
    console.log((<HTMLInputElement>e.target).value);
  }

  onClick(e: Event) {
    this.title = "New Title";
  }
}
