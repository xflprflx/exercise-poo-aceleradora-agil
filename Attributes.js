class Attributes {
  constructor(attributes) {
    (this.hp = attributes.hp),
    (this.attack = attributes.attack),
    (this.defense = attributes.defense),
    (this.specialAttack = attributes.specialAttack),
    (this.specialDefense = attributes.specialDefense),
    (this.speed = attributes.speed);
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

  addChild(child) {
    this.children.push(child);
  }

  toString(){
    return `    HP: ${this.hp}
        ATK: ${this.attack} SpATK: ${this.specialAttack}
        DEF: ${this.defense} SpDEF: ${this.specialDefense}
        SPEED: ${this.speed}`
  }
}

export default Attributes;