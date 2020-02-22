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

  //set up video with source and captions file
  var video = $('#thevideo');
  video.append("<source src='employment-movie.mp4' type='video/mp4'>");
  video.append("<track label='English' kind='captions' srclang='en' src='captions.sbv' default></track>");

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

  //turn captions on/off
  $("#captions").mousedown(function() {
    var video = $('#thevideo');
    // for (var i = 0; i < video.textTracks.length; i++) {
    //    video.textTracks[i].mode = 'show';
    // }
    var tracks = video.children()[0].textTracks;
    console.log(tracks);
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      console.log(track.mode);
    }
    console.log("caption time")
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
