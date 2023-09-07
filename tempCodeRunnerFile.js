import pokemon from './db.js'
import Pokemon from './pokemon.js'

const meuPokemon = new Pokemon(pokemon);
console.log(meuPokemon.toString());