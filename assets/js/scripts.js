var helper = {

  getDevice: function(){
    var width = $(window).width();
    if(width < 768) return 'sm';
    else if(width < 992) return 'md';
    else return 'lg';
  },

  getHeights: function(){

    return {
      header: $('#header').height(),
      portfolio: $('#port').height(),
      team: $('#team').height(),
      contact: $('#contact').height()
    }

  }


};


$(window).scroll(function(){
  buttonsCtrl();
  navCtrl();
  linksUp();
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function buttonsCtrl(){
  var btn = document.querySelector('.btn-top');
  if($(window).scrollTop() >= $(window).height()){
      $('.header-footer').fadeOut(500);
      btn.style.display = 'block';
  }
  else {
      $('.header-footer').fadeIn(1500);
      btn.style.display = 'none';
  }
}

function navCtrl(){
  var nav = $('#mynav');
  if($(window).scrollTop() >= $(window).height()){
    nav.addClass('fix');
  }
  else {
    nav.removeClass('fix');
  }

}

function linksUp(){

  var height = helper.getHeights();
  var win = $(window).scrollTop();
  var links = $('#myLinks');

  if(win < height.header){
    links.children().removeClass('active');
    return links.children()[0].classList.add('active');
  }
  else if(win > height.header && win < height.header + height.portfolio){
    links.children().removeClass('active');
    return links.children()[1].classList.add('active');
  }
  else if(win > height.header && win < height.header + height.portfolio + height.team){
    links.children().removeClass('active');
    return links.children()[2].classList.add('active');
  }
  else {
    links.children().removeClass('active');
    return links.children()[3].classList.add('active');
  }



}