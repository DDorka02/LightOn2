export default class LampaElem {
  #allapot = false;
  #szuloelem;
  #index = 0;
  #divElem;
  constructor(allapot, index, szuloelem) {
    this.#szuloelem = szuloelem;
    this.#index = index;
    this.#allapot = allapot;
    this.megjelenit();
    this.#divElem = $("div:last");
    this.esemenykezelo()
    this.szinBeallit();
  }

  esemenykezelo(){
    this.#divElem.on("click", () => {
        this.trigger("kapcsolas")
    })
  }

  megjelenit() {
    $(this.#szuloelem).append(`<div class="lampa"></div>`);
  }

  szinBeallit() {
    if (this.#allapot) {
        this.#divElem.addClass("felkapcs")
    }
  }

  trigger(esemenynev) {
    const e = new CustomEvent(esemenynev, { detail: this.#index });
    window.dispatchEvent(e);
  }
}
