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
  effectCtrl();
});


function effectCtrl(){
  var win = $(window);
  var portfolio = $('.portfolio');
  var team = $('#team');
  if(win.scrollTop() >= portfolio.offset().top - 200 && helper.getDevice() != "sm") $('.itens-effect').addClass('fadeInUp');
  if(win.scrollTop() >= team.offset().top - 200 && helper.getDevice() != "sm") {
    $('.enrico').addClass('animated fadeInLeft');
    $('.bordin').addClass('animated fadeInRight');
  }
  if(win.scrollTop() >= $('.contato').offset().top - 200)
    $('.contato-effect').addClass('fadeIn');
}

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
  if($(window).scrollTop() >= $(window).height())
    nav.removeClass('bounceInDown').addClass('fix slideInDown');
  else if(nav.hasClass('slideInDown')){
    nav.removeClass('slideInDown').addClass('slideOutUp');
    setTimeout(function(){
      nav.removeClass('slideOutUp fix').addClass('fadeInDown');
    },500);
  }

}

function linksUp(){

  var elements = [$('.portfolio'),$('.team'),$('.contato')]
  var win = $(window).scrollTop();
  var links = $('#myLinks');

  if(win < elements[0].offset().top){
    links.children().removeClass('active');
    links.children()[0].classList.add('active');
  }
  if(win >= elements[0].offset().top){
    links.children().removeClass('active');
    links.children()[1].classList.add('active');
  }
  if(win >= elements[1].offset().top){
    links.children().removeClass('active');
    links.children()[2].classList.add('active');
  }
  if(win >= elements[2].offset().top) {
    links.children().removeClass('active');
    links.children()[3].classList.add('active');
  }



}
