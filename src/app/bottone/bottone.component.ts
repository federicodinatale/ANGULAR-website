import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.css']
})
export class BottoneComponent implements OnInit {

  isDisabled = false

  imgURL1 = "https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
  imgURL2 = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  img = "ciao"
  constructor() { }

  ngOnInit(): void {

    setInterval(() =>{

      this.isDisabled = !this.isDisabled

      if(this.isDisabled) {
        this.img = this.imgURL1
      } else {
        this.img = this.imgURL2
      }

    },1000)
  }
}
