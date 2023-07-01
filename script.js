window.onload = function() {
  var videoPlayer = document.getElementById('videoPlayer');

  videoPlayer.addEventListener('play', function() {
    // Perform any actions when the video starts playing
    console.log('Video started playing');
  });

  videoPlayer.addEventListener('pause', function() {
    // Perform any actions when the video is paused
    console.log('Video paused');
  });

  videoPlayer.addEventListener('ended', function() {
    // Perform any actions when the video ends
    console.log('Video ended');
  });
};
