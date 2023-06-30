window.addEventListener('load', function() {
  // Video source URL from the admin's Google Drive
  var videoSource = 'https://drive.google.com/file/d/1aD2cU97XadNw0DBOjF-8fKQJCnWalIA9/view?usp=drive_link';
  
  var player = document.getElementById('player');
  player.src = videoSource;
});
