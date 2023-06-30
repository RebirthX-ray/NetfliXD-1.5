window.addEventListener('load', function() {
  // Video source URL from the admin's Google Drive
  var videoSource = 'https://drive.google.com/drive/folders/1P9C8pVIsrcD0k8ygR05sbJpOjP5EeURJ';
  
  var player = document.getElementById('player');
  player.src = videoSource;
});
