$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {
    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
  });
  //toggle spam checkbox with space button
  $("#receivespambutton").focusin(function() {
    $(document).on('keypress',function(e) {
      if(e.which == 32) {
        if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
          $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
          $("#spamyn").val("y");
        } else {
          $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
          $("#spamyn").val("n");
        }
      }
    });
  });

  // Play video
  $("#play_pause").mousedown(function() {
    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $($("#videoplayer").children()[0]).attr("aria-label","pause button");
      $($("#videoplayer").children()[0]).attr("alt","pause button");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $($("#videoplayer").children()[0]).attr("aria-label","play button");
        $($("#videoplayer").children()[0]).attr("alt","play button");
      $("#thevideo")[0].pause();
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");
      return;
    } else {
      $("#name").removeClass("error");
    }
    if($("#em").val()=="") {
      $("#email").addClass("error");
      return;
    } else {
      $("#name").removeClass("error");
    }
    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});
