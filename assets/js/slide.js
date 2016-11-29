var active = 0;
var interval;
var slider;
var itens;
var delay = 4000;

function slider(){

  slider = document.getElementById('slider');
  itens = document.querySelectorAll('#slider .item');
  effect(null, itens[active]);

  interval = setInterval(thisInterval,delay);

}

function thisInterval(){
    if(active == itens.length - 1) {
      effect(itens[active], itens[0]);
      active = 0;
    }else {
      effect(itens[active], itens[active + 1]);
      active ++;
    }
}

function reverseInterval(){
    if(active == 0) {
      effect(itens[active], itens[itens.length - 1]);
      active = itens.length - 1;
    }else {
      effect(itens[active], itens[active - 1]);
      active --;
    }
}

function effect(item, next){
  if(!!item){
    $(item).fadeOut(500, function(){
      item.removeAttribute('toggle');
      next.setAttribute('toggle','');
      $(next).fadeIn(500);
    })
  }else {
    next.setAttribute('toggle','');
  }
}
