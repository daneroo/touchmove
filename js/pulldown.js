$(function(){
  var revealHeight=60;
  $log=$('#log');
  $touchstart=$('#touchstart');
  $touchmove=$('#touchmove');
  $touchend=$('#touchend');
  
  $('.topbar').bind('touchmove', function(e){ e.preventDefault(); });
  $('.topbar').click(function(){
    console.log('click');
    var off = $('.topbar').offset();
    $log.append('<div>click '+off.top+'</div>');
    $('.topbar').offset({top:(off.top===0)?revealHeight:0});
  })
  $('.topbar').bind('touchstart', function(e){ 
    $touchstart.html('touchstart '+new Date());
  });
  $('.topbar').bind('touchmove', function(e){ 
    $touchmove.html('touchmove '+new Date());
  });
  $('.topbar').bind('touchend', function(e){ 
    $touchend.html('touchend '+new Date());
  });
  if (0) $('.dimple').bind('touchstart touchmove touchend', function(e){ 
    var touch = e.touches[0];
    var node = touch.target;
    return;
    node.style.position = "absolute";
    node.style.left = touch.pageX + "px";
    node.style.top = touch.pageY + "px";
  });  
})