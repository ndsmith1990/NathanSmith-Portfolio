let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');
let negative = document.querySelector('.btn-negative');
let sin = document.querySelector('.btn-sin');
let cos = document.querySelector('.btn-cos');
let tan = document.querySelector('.btn-tan');
let log = document.querySelector('.btn-log');
let para = document.querySelector('.btn-para');
let pi = document.querySelector('.btn-pi');
let e = document.querySelector('.btn-e');
let sqr = document.querySelector('.btn-sqr');
let sqrt = document.querySelector('.btn-sqrt');
let ln = document.querySelector('.btn-ln');
let abs = document.querySelector('.btn-abs');

//retrieve data from numbers that are clicked
buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    let value = e.target.dataset.num;
    screen.value += value;
  })
});

equal.addEventListener('click', function(e){
  if(screen.value === ''){
    screen.value = 'Please Enter a Value';
  } else {
    try{
      let temp = screen.value;
      if(temp.includes('(') && temp.includes(')') == false){
        screen.value += ')';
      }
      let answer = eval(screen.value);
      answer = round(answer, 10);
      screen.value = answer;
    }
    catch(e){
      screen.value = 'Invalid Entry'
      console.log(e);
    }
  }
})

clear.addEventListener('click', function(e){
  screen.value = '';
})

negative.addEventListener('click', function(e){
  let temp = screen.value;
  screen.value = temp + '-';
})

sin.addEventListener('click', function(e){
  screen.value += 'Math.sin(';
})

cos.addEventListener('click', function(e){
  screen.value += 'Math.cos(';
})

tan.addEventListener('click', function(e){
  screen.value += 'Math.tan(';
})

log.addEventListener('click', function(e){
  screen.value += 'Math.log(';
})

para.addEventListener('click', function(e){
  let temp = screen.value;
  if(temp.includes('(')){
    screen.value = temp + ')';
  }
  else{
    screen.value = temp + '(';
  }
})

pi.addEventListener('click', function(e){
  screen.value += Math.PI;
})

e.addEventListener('click', function(e){
  screen.value += Math.E;
})

sqr.addEventListener('click', function(e){
  if(screen.value != ''){
    let temp = screen.value;
    let tempArray = temp.split('')
    let plus = [];
    let minus = [];
    let div = [];
    let mult = [];
    let mod = [];
    let element = ['+','-','/','*','%'];
    for(let i = 0; i < element.length; i++){
      let ids = tempArray.indexOf(element[i]);
      switch (element[i]) {
        case '+':
          while (ids != -1) {
            plus.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '-':
          while (ids != -1) {
            minus.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '/':
          while (ids != -1) {
            div.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '*':
          while (ids != -1) {
            mult.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '%':
          while (ids != -1) {
            mod.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
      }
    }
    tempArray = tempArray.join('').split('+').join(',').split('-').join(',').split('/').join(',').split('*').join(',').split('%').join(',').split(',');
    tempArray[tempArray.length - 1] = 'Math.pow(' + tempArray[tempArray.length - 1] +', 2)';
    tempArray = tempArray.join('').split('');
    for(let i = 0; i<element.length; i++){
      switch (element[i]) {
        case '+':
          for(let j = 0; j<plus.length; j++){
            tempArray.splice(plus[j], 0, '+');
          }
          break;
        case '-':
          for(let j = 0; j<minus.length; j++){
            tempArray.splice(minus[j], 0, '-');
          }
          break;
        case '/':
          for(let j = 0; j<div.length; j++){
            tempArray.splice(div[j], 0, '/');
          }
          break;
        case '*':
          for(let j = 0; j<mult.length; j++){
            tempArray.splice(mult[j], 0, '*');
          }
          break;
        case '%':
          for(let j = 0; j<mod.length; j++){
            tempArray.splice(mod[j], 0, '%');
          }
          break;
      }
    }
    screen.value = tempArray.join('');
  }
  else{
    screen.value = 'Error: Square can only be called after entering at least one number'
  }
})

sqrt.addEventListener('click', function(e){
  if(screen.value != ''){
    let temp = screen.value;
    let tempArray = temp.split('')
    let plus = [];
    let minus = [];
    let div = [];
    let mult = [];
    let mod = [];
    let element = ['+','-','/','*','%'];
    for(let i = 0; i < element.length; i++){
      let ids = tempArray.indexOf(element[i]);
      switch (element[i]) {
        case '+':
          while (ids != -1) {
            plus.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '-':
          while (ids != -1) {
            minus.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '/':
          while (ids != -1) {
            div.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '*':
          while (ids != -1) {
            mult.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
        case '%':
          while (ids != -1) {
            mod.push(ids);
            ids = tempArray.indexOf(element, ids + 1);
          }
          break;
      }
    }
    tempArray = tempArray.join('').split('+').join(',').split('-').join(',').split('/').join(',').split('*').join(',').split('%').join(',').split(',');
    tempArray[tempArray.length - 1] = 'Math.sqrt(' + tempArray[tempArray.length - 1] +')';
    tempArray = tempArray.join('').split('');
    for(let i = 0; i<element.length; i++){
      switch (element[i]) {
        case '+':
          for(let j = 0; j<plus.length; j++){
            tempArray.splice(plus[j], 0, '+');
          }
          break;
        case '-':
          for(let j = 0; j<minus.length; j++){
            tempArray.splice(minus[j], 0, '-');
          }
          break;
        case '/':
          for(let j = 0; j<div.length; j++){
            tempArray.splice(div[j], 0, '/');
          }
          break;
        case '*':
          for(let j = 0; j<mult.length; j++){
            tempArray.splice(mult[j], 0, '*');
          }
          break;
        case '%':
          for(let j = 0; j<mod.length; j++){
            tempArray.splice(mod[j], 0, '%');
          }
          break;
      }
    }
    screen.value = tempArray.join('');
  }
  else{
    screen.value = 'Error: Square can only be called after entering at least one number'
  }
})

ln.addEventListener('click', function(e){
  screen.value += '(Math.LN';
})

abs.addEventListener('click', function(e){
  screen.value += 'Math.abs(';
})

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
