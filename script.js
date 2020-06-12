$(".click").click(function () {
  let song = $("#songInp").val();
  let songUrl = `https://api.soundcloud.com/tracks?q=${song}&client_id=5aa8e389ba4e24b6106af5159ab3e344`
  let discord = `https://discordapp.com/api/v{guild.id}`
  let youtube = "https://www.youtube.com/"
  let thescloud="https://soundcloud.com/";
  fetch(songUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function(song){ 
      let songName = song.title
      let image = song.artwork_url
      let time = changeMTS(song.duration)
      let link = song.permalink_url
      $("body").append(`<div class="Boxman"> <p class="title">${songName}</p>
      <img onclick="playPause()" id="ppbutton"src=${image}>
      <p>${time}</p><a target="_self" href= "${link}"> video </a></div>`);
      });
  // put video going to the song


      
      
    });


});

function changeMTS(miliseconds){
  return miliseconds/1000/60
}
function changesSTM(seconds){
  return seconds/60
}

let playing = true;
function playPause() {
if (playing) {
  song.play(); 
}else (playing = false) 
  song.pause(playing);
}






