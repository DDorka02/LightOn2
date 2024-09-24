import Lampak from "../View/Lampak.js"

export default class LampakModell{

    #lista = [false, false, true, true, false, true, false, true, true]
    #id = 0;
    constructor(id){
        this.#id = id
       
        this.rokarudi()
    }

    getList() {
        return this.#lista
    }

    rokarudi() {
        $(window).on("kapcsolas", (event) => {
            let id = event.detail;
            this.szomszedValtoztatas(id)
            new Lampak(this.#lista)
        })
    }

    szomszedValtoztatas(id) {
        this.#lista[id] = !this.#lista[id]
        if (id % 3 !== 0) {
            this.#lista[id - 1] = !this.#lista[id - 1]
        }
        if (id % 3 !== 2) {
            this.#lista[id + 1] = !this.#lista[id + 1]
        }
        if (id > 2 ) {
            this.#lista[id - 3] = !this.#lista[id - 3]
        }
        if (id < 6) {
            this.#lista[id + 3] = !this.#lista[id + 3]
        }
    }

}