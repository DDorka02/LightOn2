import Lampak from "../View/Lampak.js";
import LampakModell from "../Model/LampakModell.js";

export default class Controller {
  constructor() {
    this.taroloElem = $(".jatekmezo");
    this.modell = new LampakModell();
    this.lista = this.modell.getList();
    console.log(this.lista);
    new Lampak(this.lista, this.taroloElem);
    this.szin();
  }

  szin() {
    $(window).on("kapcsolas", (event) => {
      let szin = this.LampakModell.rokarudi();
      new Lampak(this.lista, this.taroloElem);
    });
  }
}
