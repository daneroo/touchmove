$(function(){
  var counter=0;
  
  var revealHeight=60;
  $log=$('#log');
  $touchstart=$('#touchstart');
  $touchmove=$('#touchmove');
  $touchend=$('#touchend');
  
  $('body').bind('touchmove', function(e){ e.preventDefault(); });

  $('.topbar').click(function(){
    console.log('topbar');
    var top = parseInt($('.topbar').css('top'));
    $log.append('<div>top '+top+'</div>');
    $('.topbar').css('top',(top===0)?revealHeight:0);
  })
  
  $('.topbar').bind('touchstart', function(e){ 
    $touchstart.html('t::touchstart '+counter++);
  });
  $('.topbar').bind('touchmove', function(e){ 
    $touchmove.html('t::touchmove '+counter++);
  });
  $('.topbar').bind('touchend', function(e){ 
    $touchend.html('t::touchend '+counter++);
  });

  $('.bottombar').bind('touchstart', function(e){ 
    $touchstart.html('b::touchstart '+counter++);
  });
  $('.bottombar').bind('touchmove', function(e){ 
    $touchmove.html('b::touchmove '+counter++);
  });
  $('.bottombar').bind('touchend', function(e){ 
    $touchend.html('b::touchend '+counter++);
  });


  $('.bottombar').click(function(){
    console.log('bottom');
    var bot = parseInt($('.bottombar').css('bottom'));
    $log.append('<div>bottom '+bot+'</div>');
    $('.bottombar').css('bottom',(bot===0)?revealHeight:0);
  })

})