function playVideo(filename) {
  var player = document.getElementById("player");
  player.innerHTML = "<video width='800' height='450' controls><source src='" + filename + "' type='video/mp4'></video>";
}
