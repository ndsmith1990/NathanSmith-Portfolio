let commentary = "";
let attack = document.getElementById("attack");
let magic = document.getElementById("magic");
let potion = document.getElementById("potion");
let damage = 0;
let reset = document.getElementById('reset');
let semiPlayable = JSON.parse(localStorage.getItem("player"));
let playable = new Character(semiPlayable.strength, semiPlayable.magic, semiPlayable.health);
playable.setName(semiPlayable.name);
console.log(playable.potions);
let monster = getMonster();
setValues(monster, playable);
let critical = 0;

attack.addEventListener("click", function(){buttonPress(0)});
magic.addEventListener("click", function(){buttonPress(1)});
potion.addEventListener("click", function(){buttonPress(2)});

function attackFun(damage2, health, maxHealth1, object){
  let amt = ((health - damage2)/maxHealth1)*100;
  let thing = null;
    if(object == 1){
      document.getElementById('healthBarMonsterValue').style.width = amt + '%';
      thing = "You hit the " + monster.name;
    }
    else if(object == 0){
      document.getElementById('healthBarPlayerValue').style.width = amt + "%";
      thing = " " + monster.name + " hit you"
    }
    commentary += thing + " for " + damage + " points!";
}

function magicFun(damage, health, maxHealth1, object){
  let amt = ((health - damage)/maxHealth1)*100;
  let thing = null;
  if(object == 1){
    document.getElementById('healthBarMonsterValue').style.width = amt + '%';
    thing = "You used magic and hit the " + monster.name;
  }
  else if(object == 0){
    document.getElementById('healthBarPlayerValue').style.width = amt + "%";
    thing = " " + monster.name + " used magic and hit you";
  }
  commentary += thing + " for " + damage + " points!";
}

function takePotion(health, maxHealth1, object){
  let amt = ((health)/maxHealth1)*100;
  if(object == 1){
    document.getElementById('healthBarMonsterValue').style.width = amt + '%';
  }
  else if(object == 0){
    document.getElementById('healthBarPlayerValue').style.width = amt + "%";
  }
}

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

function getAttackDamage(object){
  let strength = 0;
  if(object == 0){
    strength = monster.strength;
  }else if(object == 1){
    strength = playable.strength;
  }
  damage = getRandomInt(strength);
  critical = getRandomInt(100);
  if(critical <= 40){
    damage += 5;
  }
}

function getMagicDamage(){
  let magic = 30;
  damage = getRandomInt(magic);
}

function buttonPress(key){
  if(playable.isStunned == true){
    commentary = "You are stunned and cannot attack!";
  }
   else if(key == 0){
    getAttackDamage(1);
    attackFun(damage, monster.health, monster.maxHealth, 1);
    if(critical <= 40){
      monster.hurt(damage,true);
    }
    else{
      monster.hurt(damage, false);
    }
  }
  else if(key == 1){
    if(playable.magic >= 5){
      getMagicDamage();
      magicFun(damage, monster.health, monster.maxHealth, 1);
      monster.hurt(damage, true);
      playable.magic -= 5;
    }
    else{
      commentary = "You must have 5 magic points to use magic!";
      commentaryFun(commentary);
      return;
    }
  }
  else if(key == 2){
    if(playable.potions > 0){
      playable.addHealth();
      commentary = "You used a potion and gained 50 health!"
      playable.potions--;
      takePotion(playable.health, playable.maxHealth, 0);
    }
    else{
      commentary = "You don't have any potions left!";
      commentaryFun(commentary);
      return;
    }
  }
  damage = 0;
  if(monster.health > 0){
    monsterAction();
  }
  commentaryFun(commentary);
  document.getElementById("player-health-num").innerHTML = `Health: ${playable.health}/200`;
  document.getElementById("monster-health-num").innerHTML = `Health: ${monster.health}/200`;
  document.getElementById("monster-magic").innerHTML = `Magic: ${monster.magic}`;
  document.getElementById("player-magic").innerHTML = `Magic: ${playable.magic}`;
  document.getElementById("player-potions").innerHTML = `Potions: ${playable.potions}`;
  document.getElementById("monster-potions").innerHTML = `Potions: ${monster.potions}`;
  damage = 0;
  playable.magic++;
  monster.magic++;
  if(playable.health <= 0){
    endGame(1);
  }
  if(monster.health <= 0){
    endGame(0);
  }
  commentary = "";
}

function monsterAction(){
  if(monster.isStunned == true){
    commentary +=" " + monster.name + " is stunned and cannot attack!";
  }
  else if(monster.health <= 10 && monster.potions > 0){
    monster.addHealth();
    monster.potions--;
    takePotion(monster.health, monster.maxHealth, 1);
    commentary += " " + monster.name + " used a potion and gained 50 health!";
  }
  else if(monster.magic >= 5){
    getMagicDamage();
    magicFun(damage, playable.health, playable.maxHealth, 0);
    playable.hurt(damage, true);
    monster.magic -= 5;
  }
  else{
    getAttackDamage();
    attackFun(damage, playable.health, playable.maxHealth, 0);
    if(critical <= 40){
      playable.hurt(damage,true);
    }
    else{
      playable.hurt(damage, false);
    }
  }
}

function endGame(key){
  if(key == 0){
    commentary += "YOU WIN!!! Press the reset button next to the potion button to play again!";
  }
  else if(key == 1){
    commentary += "YOU LOSE! Press the reset button next to the potion button to play again!";
  }
  reset.style.visibility = "visible";
  document.getElementById("magic").disabled = true;
  document.getElementById("potion").disabled = true;
  document.getElementById("attack").disabled = true;
  commentaryFun(commentary);
}

function onClick(){
  window.open("./frontScreen.html","_self")
}
