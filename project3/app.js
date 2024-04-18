var main = function() {
    $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
});

  $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

      $('#mute').click(function(){
        $('#message').text("Track muted");
        $('#player').prop('muted', true);
    });

     $('#unmute').click(function(){
        $('#message').text("Track unmuted");
        $('#player').prop('muted', false);
    });

       $('#stop').click(function(){
        $('#message').text("Track stopped");
        $('#player').trigger("pause");
        $('#player').prop('currentTime', 0);
    });

       $('#volumeUp').click(function(){
        var currentVolume = $('#player').prop('volume');
        if (currentVolume < 1) {
            $('#player').prop('volume', currentVolume + 0.1);
        }
    });

    $('#volumeDown').click(function(){
        var currentVolume = $('#player').prop('volume');
        if (currentVolume > 0) {
            $('#player').prop('volume', currentVolume - 0.1);
        }
    });
  
}

$(document).ready(main);