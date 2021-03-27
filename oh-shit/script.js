$(document).ready(function() {
  setTimeout(function(){
    $(".powerbutton").addClass("alarm"); 
    $(".secondsbutton").addClass("flashing"); 
    $(".body").addClass("alarming"); 
    $(".tvbox").addClass("alert"); 
    $(".windowbox").addClass("help"); 
    $(".volbar").addClass("hidden");
    $(".voltext2").addClass("hidden");
    $(".chbar").addClass("hidden");
    $(".chtext2").addClass("hidden");
    $(".chnumber").addClass("hidden");
    $("audio").get(0).play();
  }, 5000);

    $(".powerbutton").click(function() { 
    $(".powerbutton").removeClass("alarm");
    $(".secondsbutton").removeClass("flashing"); 
    $(".body").removeClass("alarming"); 
    $(".tvbox").removeClass("alert"); 
    $(".windowbox").removeClass("help"); 
    $(".volbar").removeClass("hidden");
    $(".voltext2").removeClass("hidden");
    $(".chbar").removeClass("hidden");
    $(".chtext2").removeClass("hidden");
    $(".chnumber").removeClass("hidden");
    $("audio").get(0).pause();
	$("audio").get(0).currentTime = 0;
  });

  setInterval(function(){
    var time = new Date();
    var minutes = time.getMinutes() % 12+1;
    $(".chnumber").text(minutes);
    if (!$(".tvbox").hasClass("alert")){
    	$(".tvbox").removeClass().addClass("tvbox").addClass("g"+minutes);
    }
  },1000);

});