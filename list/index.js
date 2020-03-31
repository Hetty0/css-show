var content = document.getElementsByClassName('content')[0];
var cont = document.createElement('div');
cont.setAttribute('class', 'cont');

for (let i = 0; i < 72; i++) {
  let element = document.createElement('div');
  element.setAttribute('class', 'box');
  element.innerText = `box${i+1}`;
  cont.appendChild(element);
}

content.appendChild(cont);