import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.css"]
})
export class HomePage {
  Fheight: number;
  Iheight: number;
  sex: string;
  Riwc:number;
  Miwc:number;
  Hiwc:number;
  Diwc:number;
  IBWMessage: string;
  constructor(public navCtrl: NavController) {}

  calculateBMI() {
  
    if (this.sex="m") {
      this.Riwc = ((((this.Fheight - 5)*12)+this.Iheight)*1.9)+52;
      this.Miwc = ((((this.Fheight - 5)*12)+this.Iheight)*1.41)+56.2;
      this.Hiwc = ((((this.Fheight - 5)*12)+this.Iheight)*2.7)+48;
      this.Diwc = ((((this.Fheight - 5)*12)+this.Iheight)*2.3)+50;
      this.IBWMessage = "kg";
    }  else if (this.sex= "f") {
      this.Riwc = ((((this.Fheight - 5)*12)+this.Iheight)*1.7)+49;
      this.Miwc = ((((this.Fheight - 5)*12)+this.Iheight)*1.36)+53.1;
      this.Hiwc = ((((this.Fheight - 5)*12)+this.Iheight)*2.2)+45.5;
      this.Diwc = ((((this.Fheight - 5)*12)+this.Iheight)*2.3)+45.5;;
      this.IBWMessage = "kg";
    }
  }
}
