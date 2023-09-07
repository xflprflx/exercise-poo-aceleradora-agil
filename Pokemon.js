import Attributes from "./attributes.js";
import Move from "./move.js";
import inicialMaiuscula from "./utils.js";

class Pokemon {
  /*constructor(name, ability, preEvolution, evolution, attributes) {
    this.name = name;
    this.ability = ability;
    this.preEvolution = preEvolution;
    this.evolution = evolution;
    this.attributes = attributes;
    this.types = [];
    this.moves = [];
  }*/

  constructor(pokemon){
    this.name = pokemon.name;
    this.ability = pokemon.ability;
    this.preEvolution = pokemon.preEvolution;
    this.evolution = pokemon.evolution;
    this.attributes = new Attributes(pokemon.attributes);
    this.types = [];
    pokemon.types.map(x => this.add("types", x));
    this.moves = [];
    pokemon.moves.map(x => this.add("moves", new Move(x.name, x.lv)));
  }

  get(key) {
    return this[key];
  }

  set(key, value) {
    this[key] = value;
  }

  add(key, value) {
    this[key].push(value);
  }

  toString() {
    return `    Nome: ${inicialMaiuscula(this.name)} - Tipo: ${this.types.map(x => inicialMaiuscula(x))}
    Habilidade: ${inicialMaiuscula(this.ability)}
  
    Linha de evolução:
        ${inicialMaiuscula(this.preEvolution)} >> ${this.name.toUpperCase()} >> ${inicialMaiuscula(this.evolution)}

    Atributos:

    ${this.attributes.toString()}

    Ataques:
    ${Move.toString(Move.bubbleSort(this.moves))}`
  }
}

export default Pokemon;