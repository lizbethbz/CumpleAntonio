const songPlay = songProgress();
document.querySelector(".tarjeta").appendChild(songPlay);

document.getElementById("button-song").addEventListener("click",function(){
  const state = this.children[0].className;
  this.children[0].className = state.includes("play") ? "fa-solid fa-pause" : "fa-solid fa-play";
 const song = document.querySelector("audio");
  if (song.paused) song.play();
  else song.pause();

})

document.querySelector("audio").addEventListener("timeupdate", function() {
  const progress =Math.floor(this.currentTime/this.duration*100);
  songPlay.style.width = `${progress+1}%`;
  if (progress >= 100) songPlay.remove();
})

function songProgress (){
  const div = document.createElement("DIV");
  div.classList.add("play");
  return div;
}