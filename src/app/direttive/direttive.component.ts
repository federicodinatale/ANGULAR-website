import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrls: ['./direttive.component.css']
})
export class DirettiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Direttiva";
  isOnline = false;

  persone = [
    {nome: "Federico", cognome :"Di Natale", anni: 30, isOnline : true},
    {nome: "Marco", cognome :"Rossi", anni: 20, isOnline : false},
    {nome: "Giovanni", cognome :"Verdi", anni: 12, isOnline : true},
    {nome: "Luca", cognome :"Bruno", anni: 55, isOnline : false},
  ]


  valoreSwitch = 4;
  valoreSwitchString = "Pippo";





  citiesEurope = [
    {city: "Torino", country : "Italy", seaView : false},
    {city: "Barcelona", country : "Spain", seaView : true},
    {city: "London", country : "United Kingdom", seaView : false},
    {city: "Berlin", country : "Germany", seaView : false},
  ]
}
