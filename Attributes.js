class Attributes {

  #hp;
  #attack;
  #defense;
  #specialAttack;
  #specialDefense;
  #speed;

  constructor(attributes) {
    (this.#hp = attributes.hp),
    (this.#attack = attributes.attack),
    (this.#defense = attributes.defense),
    (this.#specialAttack = attributes.specialAttack),
    (this.#specialDefense = attributes.specialDefense),
    (this.#speed = attributes.speed);
  }

  getHp() { return this.#hp }
  getAttack() { return this.#attack }
  getDefense() { return this.#defense }
  getSpecialAttack() { return this.#specialAttack }
  getSpecialDefense() { return this.#specialDefense }
  getSpeed() { return this.#speed }

  setHp(hp) { this.#hp = hp}
  setAttack(attack) { this.#attack = attack }
  setDefense(defense) { this.#defense = defense }
  setSpecialAttack(specialAttack) { this.#specialAttack = specialAttack }
  setSpecialDefense(specialDefense) { this.#specialDefense = specialDefense }
  setSpeed(speed) { this.#speed = speed }

  toString(){
    return `    HP: ${this.#hp}
        ATK: ${this.#attack} SpATK: ${this.#specialAttack}
        DEF: ${this.#defense} SpDEF: ${this.#specialDefense}
        SPEED: ${this.#speed}`
  }
}

export default Attributes;