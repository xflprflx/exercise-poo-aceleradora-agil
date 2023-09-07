import Attributes from "./attributes.js";
import Move from "./move.js";
import inicialMaiuscula from "./utils.js";

class Pokemon {
  #name;
  #ability;
  #preEvolution;
  #evolution;
  #attributes;
  #types = [];
  #moves = [];

  constructor(pokemon){
    this.#name = pokemon.name;
    this.#ability = pokemon.ability;
    this.#preEvolution = pokemon.preEvolution;
    this.#evolution = pokemon.evolution;
    this.#attributes = new Attributes(pokemon.attributes);
    pokemon.types.map(x => this.addTypes(x));
    pokemon.moves.map(x => this.addMoves(new Move(x.name, x.lv)));
  }

  getName() { return this.#name }
  getAbility() { return this.#ability }
  getPreEvolution() { return this.#preEvolution }
  getEvolution() { return this.#evolution }
  getAttributes() { return this.#attributes }
  getTypes() { return this.#types }
  getMoves() { return this.#moves }

  setName(name) { this.#name = name}
  setAbility(ability) { this.#ability = ability}
  setPreEvolution(preEvolution) { this.#preEvolution = preEvolution }
  setEvolution(evolution) { this.#evolution = evolution }
  setAttributes(attributes) { this.#attributes = attributes }
  addTypes(value) { this.#types.push(value) }
  addMoves(value) { this.#moves.push(value) }

  toString() {
    return `    Nome: ${inicialMaiuscula(this.#name)} - Tipo: ${this.#types.map(x => inicialMaiuscula(x))}
    Habilidade: ${inicialMaiuscula(this.#ability)}
  
    Linha de evolução:
        ${inicialMaiuscula(this.#preEvolution)} >> ${this.#name.toUpperCase()} >> ${inicialMaiuscula(this.#evolution)}

    Atributos:

    ${this.#attributes.toString()}

    Ataques:
    ${Move.toString(Move.bubbleSort(this.#moves))}`
  }
}

export default Pokemon;