function printNum(){
  document.getElementById("strength").value = playable.strength;
  document.getElementById("magic").value = playable.magic;
}

function noPointsLeft(){
  console.log("noPointsLeft");;
  document.getElementById("up-strength").style.visibility = "hidden";
  document.getElementById("up-magic").style.visibility = "hidden";
}

function gotMorePoints(){
  document.getElementById("up-strength").style.visibility = "visible";
  document.getElementById("up-magic").style.visibility = "visible";
}

function attributePoints(points){
  document.getElementById("attPoints").innerHTML = `Attribute Points Left: ${points}`;
}

function commentaryFun(commentary){
  document.getElementById("commentary").innerHTML = `${commentary}`;
}

function getMonster(){
  let num = Math.floor(Math.random() * Math.floor(3));
  let monster = null;
  if(num == 0){
    monster = new Character(12, 6, 200);
    document.getElementById("monster-pic").src = "./Images/elf.jpg"
    monster.setName("Elf");
  }
  else if(num == 1){
    monster = new Character(10, 2, 200);
    monster.setName("Knight");
    document.getElementById("monster-pic").src = "./Images/knight.png"
  }
  else if(num == 2){
    monster = new Character(8, 10, 200);
    monster.setName("Gnome");
    document.getElementById("monster-pic").src = "./Images/gnome.jpg"
  }
  return monster;
}

function setValues(monster1, playable1){
  let monName = monster1.name;
  let monMagic = monster1.magic;
  let monPotions = monster1.potions;
  let playName = playable1.name;
  let playMagic = playable1.magic;
  console.log(playable1.potions);
  let playPotions = playable1.potions;
  console.log(playPotions);

  document.getElementById("monster-name").innerHTML = `${monName}`;
  document.getElementById("monster-magic").innerHTML = `Magic: ${monMagic}`;
  document.getElementById("monster-potions").innerHTML = `Potions: ${monPotions}`;
  document.getElementById("player-name").innerHTML = `${playName}`;
  document.getElementById("player-magic").innerHTML = `Magic: ${playMagic}`;
  document.getElementById("player-potions").innerHTML = `Potions: ${playPotions}`;
}
