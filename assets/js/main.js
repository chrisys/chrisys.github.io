function getLastFmInfo() {
  fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=chrisys&api_key=6fcc9e217642b34260dfea3dd4e9ed5d&format=json&limit=1')
    .then(function(response) { return response.json(); })
    .then(function(res) {
      const track = res.recenttracks.track[0];
      if (!track) return;

      const nowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
      const trackName = track.name;
      const artistName = track.artist['#text'];

      if (!nowPlaying) {
        const playedAt = parseInt(track.date.uts, 10) * 1000;
        const ageHours = (Date.now() - playedAt) / (1000 * 60 * 60);
        if (ageHours > 24) return;
      }

      $('#listening-label').text(nowPlaying ? 'Now playing' : 'Last played');
      $('#spotify-eq').css('opacity', nowPlaying ? 1 : 0);
      $('#spotify-info-container').css('opacity', 1);

      if ($('#spotify-trackname').html() != trackName) {
        $('#spotify-trackname').animate({ 'opacity': 0 }, 400, function() {
          $(this).html(trackName).animate({ 'opacity': 1 }, 400);
        });
      }

      if ($('#spotify-artistname').html() != $('<div/>').text(artistName).html()) {
        $('#spotify-artistname').animate({ 'opacity': 0 }, 400, function() {
          $(this).html(artistName).animate({ 'opacity': 1 }, 400);
        });
      }
    })
    .catch(function(err) { console.error('Last.fm fetch failed:', err); });
}

if ($('#spotify-info-container').length) {
  getLastFmInfo();
  setInterval(getLastFmInfo, 60000);
}
