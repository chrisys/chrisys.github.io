if($("#spotify-info-container").length) {
    // if the spotify info container exists, set an interval to update it occasionally
    setInterval(function() {
  
        $.getJSON('/', null, function(res) {
          if(res.nowplaying==true)
          {
            $('#spotify-eq').animate({ 'opacity' : 1 }, 400);
          } else {
            $('#spotify-eq').animate({ 'opacity' : 0 }, 400);
          }
  
          if($('#spotify-trackname').html() != res.spotifytrackname)
          {
            $('#spotify-trackname').animate({
              'opacity' : 0
            }, 400, function() {
              $(this).html(res.spotifytrackname).animate({ 'opacity' : 1 }, 400);
            });
          }
  
          if($('#spotify-artistname').html() != $('<div/>').text(res.spotifyartistname).html())
          {
            $('#spotify-artistname').animate({
              'opacity' : 0
            }, 400, function() {
              $(this).html(res.spotifyartistname).animate({ 'opacity' : 1 }, 400);
            });
          }
  
          if($('#spotify-devicename').html() != $('<div/>').text(res.spotifydevicename).html())
          {
            $('#spotify-devicename').animate({
              'opacity' : 0
            }, 400, function() {
              $(this).html(res.spotifydevicename).animate({ 'opacity' : 1 }, 400);
            });
          }
        });
  
    }, 5000);
  }
  