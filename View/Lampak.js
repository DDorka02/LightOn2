import LampaElem from "./LampaElem.js";

export default class Lampak {
  #szuloelem;
  #lista = [];
  constructor(lista, szuloelem) {
    this.#szuloelem = szuloelem;
    this.#lista = lista;
    this.#lista.forEach((element, index) => {
        new LampaElem(element, index, szuloelem);
    
    })

  
  }
}