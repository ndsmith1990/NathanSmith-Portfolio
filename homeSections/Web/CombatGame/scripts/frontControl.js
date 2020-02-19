let upStrength = document.getElementById("up-strength");
let downStrength = document.getElementById("down-strength");
let upMagic = document.getElementById("up-magic");
let downMagic = document.getElementById("down-magic");
let submit = document.getElementById("submit");
let name = document.getElementById("name");


upStrength.addEventListener("click", function(){incrementEvent('strength')});
downStrength.addEventListener("click", function(){decrementEvent('strength')});
upMagic.addEventListener("click", function(){incrementEvent('magic')});
downMagic.addEventListener("click", function(){decrementEvent('magic')});

function incrementEvent(key){
  playable.increment(key);
  printNum();
  points -= 1;
  console.log(points);
  if(points <= 0){
    noPointsLeft();
  }
  attributePoints(points);
}

function decrementEvent(key){
  playable.decrement(key);
  printNum();
  points += 1;
  gotMorePoints();
  attributePoints(points);
}

function onClick(){
  document.getElementById("nameError").style.visibility = "hidden";
  document.getElementById("pointsError").style.visibility = "hidden";
  if(name.value.length != 0 && points == 0){
    playable.setName(name.value);
    localStorage.setItem("player", JSON.stringify(playable));
    window.open("./combatScreen.html","_self")
  }
  else if(name.value.length == 0 && points != 0){
    document.getElementById("nameError").style.visibility = "visible";
    document.getElementById("pointsError").style.visibility = "visible";
  }
  else if(name.value.length == 0){
    document.getElementById("nameError").style.visibility = "visible";
  }
  else if(points != 0){
    document.getElementById("pointsError").style.visibility = "visible";
  }

}
