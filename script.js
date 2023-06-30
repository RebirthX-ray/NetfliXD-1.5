window.addEventListener('load', function() {
  // Video source URL from the admin's Google Drive
  var videoSource = 'https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID';
  
  var player = document.getElementById('player');
  player.src = videoSource;
});
