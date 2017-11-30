var counter = 0;
var left = document.querySelector('.btn_left');
var right = document.querySelector('.btn_right');

left.addEventListener('click',minus,false);
right.addEventListener('click',plus,false);

var move = document.getElementById('posts');
function rotation(){
  result = (counter +6)%6
  console.log('result:'+result);
  if(result == 0){
    move.setAttribute('class','posts space0');
  }
  else if(result == 1){
    move.setAttribute('class','posts space1');
  }
  else if(result == -5){
    move.setAttribute('class','posts space1');
  }
  else if(result == 2){
    move.setAttribute('class','posts space2');
  }
  else if(result == -4){
    move.setAttribute('class','posts space2');
  }
  else if(result == 3){
    move.setAttribute('class','posts space3');
  }
  else if(result == -3){
    move.setAttribute('class','posts space2');
  }
  else if(result == 4){
    move.setAttribute('class','posts space4');
  }
  else if(result == -2){
    move.setAttribute('class','posts space4');
  }
  else if(result == 5){
    move.setAttribute('class','posts space5');
  }
  else if(result == -1){
    move.setAttribute('class','posts space5');
  }
}

function minus(){
  counter--;
  console.log('counter:'+counter);
  rotation();
}

function plus(){
  counter++;
  console.log('counter:'+counter);
  rotation();
}