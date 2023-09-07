import inicialMaiuscula from "./utils.js";

class Move {

  #name;
  #lv;
  
  constructor(name, lv) {
    this.#name = name;
    this.#lv = lv;
  }

  getName() { return this.#name }
  getLv() { return this.#lv }

  setName(name) { this.#name = name }
  setLv(lv) { this.#lv = lv }

  /*toString(){
    return `Lv ${this.lv} - ${this.name}`
  }*/

  static toString(moves){
    return `    ${moves.map(x => `Lv ${x.#lv} - ${inicialMaiuscula(x.#name)}`).join('\n\t')}`
  }

  static bubbleSort(moves){
    for(let i = 0; i < moves.length; i++){
      for(let m = 0; m < (moves.length - i - 1); m++){
        if(moves[m].#lv > moves[m+1].#lv){
          let elementoTemp = moves[m]
          moves[m] = moves[m+1]
          moves[m+1] = elementoTemp
        }
      }
    }
    return moves;  
  }
}

export default Move;