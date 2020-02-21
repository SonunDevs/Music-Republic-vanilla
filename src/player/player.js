import { playlist } from "./playlistdata";
import "../playlist/playlist";
import "../math/math";

/* General Load / Variables
======================================*/
let playState = false;
let volume_value = 1;
// var rot = 0;
var duration;
var playPercent;
var rotate_timer;
// var armrot = -45;
var bufferPercent;
var currentSong = 0;
var arm_rotate_timer;
// var arm = document.getElementById("arm");
var next = document.getElementById("next");
var song = document.getElementById("song");
var timer = document.getElementById("timer");
var music = document.getElementById("music");
var album = document.getElementById("album");
var artist = document.getElementById("artist");
var volume = document.getElementById("volume");
var playButton = document.getElementById("play");
var timeline = document.getElementById("slider");
var playhead = document.getElementById("elapsed");
var previous = document.getElementById("previous");
var pauseButton = document.getElementById("pause");
var bufferhead = document.getElementById("buffered");
// var artwork = document.getElementsByClassName("artwork")[0];
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];
let musicDuration = document.getElementById("music_duration");

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", bufferUpdate, false);
load();

/* Functions
======================================*/

// Функция отвечающий за событии нажатие клавиатуры
document.documentElement.addEventListener("keydown", event => {
  // плей и пауза при нажатие клавиатуры "Space"
  if (event.code == "Space") {
    playState = !playState;
    if (playState) {
      music.play();
    } else {
      music.pause();
    }
  }

  // увеличение и уменьшение громкости
  if (event.code == "ArrowDown" && volume_value > 0) {
    // Math.round10 округление до ближайшего значения
    volume_value = Math.round10(volume_value - 0.1, -1);
    changeVolume(volume_value);
  } else if (event.code == "ArrowUp" && volume_value < 1) {
    volume_value = Math.round10(volume_value + 0.1, -1);
    changeVolume(volume_value);
  }

  if (event.code == "ArrowLeft") {
    // Следующий трек
    nextFunc();
  } else if (event.code == "ArrowRight") {
    // Предыдущий трек
    previousFunc();
  }

  // console.log(event, volume_value);
});

// функция увеличение и уменьшение громкости
function changeVolume(volumeValue) {
  music.volume = volumeValue;
  volume.value = volumeValue;
  visablevolume.style.width = (80 - 11) * volumeValue + "px";
}

function load() {
  pauseButton.style.visibility = "hidden";
  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  if (album) {
    album.innerHTML = playlist[currentSong]["album"];
    album.title = playlist[currentSong]["album"];
  }
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  // artwork.setAttribute(
  //   "style",
  //   "background:url(https://i.imgur.com/3idGgyU.png), url('" +
  //     playlist[currentSong]["artwork"] +
  //     "') center no-repeat;"
  // );
  music.innerHTML =
    '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  music.load();
}
function reset() {
  // rotate_reset = setInterval(function() {
  //   Rotate();
  //   if (rot == 0) {
  //     clearTimeout(rotate_reset);
  //   }
  // }, 1);
  // armrot = -45;
  fireEvent(pauseButton, "click");
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  if (album) {
    album.innerHTML = playlist[currentSong]["album"];
    album.title = playlist[currentSong]["album"];
  }
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  // artwork.setAttribute(
  //   "style",
  //   "background:url(https://i.imgur.com/3idGgyU.png), url('" +
  //     playlist[currentSong]["artwork"] +
  //     "') center no-repeat;"
  // );
  music.innerHTML =
    '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  music.load();
}
function formatSecondsAsTime(secs, format) {
  var hr = Math.floor(secs / 3600);
  var min = Math.floor((secs - hr * 3600) / 60);
  var sec = Math.floor(secs - hr * 3600 - min * 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}
function timeUpdate() {
  bufferUpdate();
  playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.width = playPercent + "px";
  timer.innerHTML = formatSecondsAsTime(music.currentTime.toString());
  musicDuration.innerHTML = formatSecondsAsTime(music.duration.toString());
  // console.log(music.duration); длина песни
}

function bufferUpdate() {
  bufferPercent = timelineWidth * (music.buffered.end(0) / duration);
  bufferhead.style.width = bufferPercent + "px";
}

// function Rotate() {
//   if (rot == 361) {
//     artwork.style.transform = "rotate(0deg)";
//     rot = 0;
//   } else {
//     artwork.style.transform = "rotate(" + rot + "deg)";
//     rot++;
//   }
// }
// function RotateArm() {
//   if (armrot > -12) {
//     arm.style.transform = "rotate(-38deg)";
//     armrot = -45;
//   } else {
//     arm.style.transform = "rotate(" + armrot + "deg)";
//     armrot = armrot + 26 / duration;
//   }
// }
function fireEvent(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
function _next() {
  if (currentSong == playlist.length - 1) {
    reset();
  } else {
    fireEvent(next, "click");
  }
}

playButton.onclick = function() {
  music.play();
};
pauseButton.onclick = function() {
  music.pause();
};

music.addEventListener(
  "play",
  function() {
    playButton.style.visibility = "hidden";
    pause.style.visibility = "visible";
    // rotate_timer = setInterval(function() {
    //   if (!music.paused && !music.ended && 0 < music.currentTime) {
    //     Rotate();
    //   }
    // }, 10);
    // if (armrot != -45) {
    //   arm.setAttribute("style", "transition: transform 800ms;");
    //   arm.style.transform = "rotate(" + armrot + "deg)";
    // }
    // arm_rotate_timer = setInterval(function() {
    //   if (!music.paused && !music.ended && 0 < music.currentTime) {
    //     if (armrot == -45) {
    //       arm.setAttribute("style", "transition: transform 800ms;");
    //       arm.style.transform = "rotate(-38deg)";
    //       armrot = -38;
    //     }
    //     if (arm.style.transition != "") {
    //       setTimeout(function() {
    //         arm.style.transition = "";
    //       }, 1000);
    //     }
    //     // RotateArm();
    //   }
    // }, 1000);
  },
  false
);

music.addEventListener(
  "pause",
  function() {
    // arm.setAttribute("style", "transition: transform 800ms;");
    // arm.style.transform = "rotate(-45deg)";
    playButton.style.visibility = "visible";
    pause.style.visibility = "hidden";
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
  },
  false
);

next.addEventListener("click", nextFunc);
previous.addEventListener("click", previousFunc);

function nextFunc() {
  // arm.setAttribute("style", "transition: transform 800ms;");
  // arm.style.transform = "rotate(-45deg)";
  // arm.style.transform = "rotate(-45deg)";
  // armrot = -45;
  clearTimeout(rotate_timer);
  clearTimeout(arm_rotate_timer);
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  if (currentSong + 1 == playlist.length) {
    currentSong = 0;
    music.innerHTML =
      '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  } else {
    currentSong++;
    music.innerHTML =
      '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  }
  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  if (album) {
    album.innerHTML = playlist[currentSong]["album"];
    album.title = playlist[currentSong]["album"];
  }
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  // artwork.setAttribute(
  //   "style",
  //   "transform: rotate(" +
  //     rot +
  //     "deg); background:url(https://i.imgur.com/3idGgyU.png), url('" +
  //     playlist[currentSong]["artwork"] +
  //     "') center no-repeat;"
  // );
  music.load();
  duration = music.duration;
  musicDuration.innerHTML = formatSecondsAsTime(music.duration.toString());
  music.play();
}

function previousFunc() {
  // arm.setAttribute("style", "transition: transform 800ms;");
  // arm.style.transform = "rotate(-45deg)";
  // arm.style.transform = "rotate(-45deg)";
  // armrot = -45;
  clearTimeout(rotate_timer);
  clearTimeout(arm_rotate_timer);
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  if (currentSong - 1 == -1) {
    currentSong = playlist.length - 1;
    music.innerHTML =
      '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  } else {
    currentSong--;
    music.innerHTML =
      '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  }
  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  if (album) {
    album.innerHTML = playlist[currentSong]["album"];
    album.title = playlist[currentSong]["album"];
  }
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  // artwork.setAttribute(
  //   "style",
  //   "transform: rotate(" +
  //     rot +
  //     "deg); background:url(https://i.imgur.com/3idGgyU.png), url('" +
  //     playlist[currentSong]["artwork"] +
  //     "') center no-repeat;"
  // );
  music.load();
  duration = music.duration;
  musicDuration.innerHTML = formatSecondsAsTime(music.duration.toString());
  music.play();
}

function setTrack(index) {
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  // "currentSong" - индекс песни
  currentSong = index;
  music.innerHTML =
    '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';

  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  if (album) {
    album.innerHTML = playlist[currentSong]["album"];
    album.title = playlist[currentSong]["album"];
  }
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];

  music.load();
  duration = music.duration;
  musicDuration.innerHTML = formatSecondsAsTime(music.duration.toString());
  music.play();
}

volume.oninput = function() {
  changeVolume(volume.value);
};

music.addEventListener(
  "canplay",
  function() {
    duration = music.duration;
  },
  false
);

window.addEventListener("click", event => {
  if (event.target.className == "list_backdrop") {
    for (let i = 0; i < playlist.length; i++) {
      const element = playlist[i];
      if (event.target.getAttribute("data-mp3") == element.mp3) {
        setTrack(i);
      }
    }
  } else if (event.target.className == "far fa-play-circle") {
    for (let i = 0; i < playlist.length; i++) {
      const element = playlist[i];
      if (event.target.parentNode.getAttribute("data-mp3") == element.mp3) {
        setTrack(i);
      }
    }
  }
});
