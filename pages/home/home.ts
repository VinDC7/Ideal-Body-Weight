import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  inch: number;
  riwc: number;
  miwc: number;
  hiwc: number;
  diwc: number;
  heightfeet: number;
  heightinch: number;
   sex: string;
  IBWmessage: string;
    
    constructor(public navCtrl: NavController) {}
      
    calculateIBW() {
      if (this.sex = "m"){
      this.heightinch = (this.heightfeet - 5) * 12;
      this.riwc = Math.round(52 + 1.9 *(this.heightinch)+ 1.9 * this.inch);
      this.miwc = Math.round(56.2 + 1.41 *(this.heightinch)+ 1.41 * this.inch);
      this.hiwc = Math.round(48 + 2.7 *(this.heightinch)+ 2.7 * this.inch);
      this.diwc = Math.round(50 + 2.3 *(this.heightinch)+ 2.3 * this.inch);
      this.IBWmessage = "kg.";
    }
    else if (this.sex = "f") {
      this.heightinch = (this.heightfeet - 5) * 12;
      this.riwc = Math.round(49 + 1.7 *(this.heightinch)+ 1.7 * this.inch);
      this.miwc = Math.round(53.1 + 1.36 *(this.heightinch)+ 1.36 * this.inch);
      this.hiwc = Math.round(45.5 + 2.2 *(this.heightinch)+ 2.2 * this.inch);
      this.diwc = Math.round(45.5 + 2.3 *(this.heightinch)+ 2.3 * this.inch);
      this.IBWmessage = "kg.";
    }
    else{
    }
  }
}