class Character {
  constructor(strength, magic, health) {
    this.health = health;
    this.strength = strength;
    this.magic = magic;
    this.stunned = false;
    this.maxHealth = health;
    this.potions = 3;
  }

  getHealth(){
    return this.health;
  }

  getStrength(){
    return this.strength;
  }

  getName(){
    return this.name;
  }

  isStunned(){
    return this.stunned;
  }

  hurt(damage1, magic){
    this.health -= damage1;
    if(magic == true){
      let num = Math.floor(Math.random() * 100);
      if(num <= 25){
        this.stunned = true;
      }
    }
  }

  addHealth(){
    this.health += 50;
  }

  increment(key){
    this[key] += 1;
  }

  decrement(key){
    if(this[key] > 0){
      this[key] -= 1;
    }
    else{
      this[key] = 0;
    }
  }

  setName(name){
    this.name = name;
  }
}
