import "../math/math";
import "../getdata/getdata";
import { playlistData } from "../playlistData/playlistdata";

/* General Load / Variables ======================================*/
let playState = false;
let volume_value = 1;
var duration;
var playPercent;
var rotate_timer;
var bufferPercent;
var currentSong = 0;
var arm_rotate_timer;
var next = document.getElementById("next");
var timer = document.getElementById("timer");
var music = document.getElementById("music");
var album = document.getElementById("album");
let artists = document.querySelectorAll(".artist");
let songs = document.querySelectorAll(".song");
var volume = document.getElementById("volume");
var playButton = document.getElementById("play");
var timeline = document.getElementById("slider");
var playhead = document.getElementById("elapsed");
var previous = document.getElementById("previous");
var pauseButton = document.getElementById("pause");
var bufferhead = document.getElementById("buffered");
let artworks = document.querySelectorAll(".song_artwork");
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];
let musicDuration = document.getElementById("music_duration");
let volumeContainer = document.querySelector(".volume_range_container");
let volumeIcon = document.querySelector(".slider i.fa-volume-up");
let volumeHoverState = false;

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", bufferUpdate, false);

/* Functions
======================================*/

volumeIcon.addEventListener("mouseenter", () => {
  activationVolumeSlider(true);
});

volumeContainer.addEventListener("mouseenter", () => {
  volumeHoverState = true;
  activationVolumeSlider(true);
});

volumeIcon.addEventListener("mouseleave", () => {
  let timeOut = setTimeout(() => {
    clearTimeout(timeOut);
    if (volumeHoverState == false) {
      activationVolumeSlider(false);
    }
  }, 1000);
});

volumeContainer.addEventListener("mouseleave", () => {
  activationVolumeSlider(false);
  volumeHoverState = false;
});

function activationVolumeSlider(status) {
  if (status) {
    volumeContainer.classList.add("active");
  } else {
    volumeContainer.classList.remove("active");
  }
}

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

export function load() {
  pauseButton.style.visibility = "hidden";

  setTrackData();
}

function setTrackData() {
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";

  songs.forEach(song => (song.innerHTML = playlistData[currentSong]["title"]));
  songs.forEach(song => (song.title = playlistData[currentSong]["title"]));

  if (album) {
    album.innerHTML = playlistData[currentSong]["album"]["title"];
    album.title = playlistData[currentSong]["album"]["title"];
  }

  artists.forEach(
    artist => (artist.innerHTML = playlistData[currentSong]["artist"]["name"])
  );
  artists.forEach(
    artist => (artist.title = playlistData[currentSong]["artist"]["name"])
  );

  artworks.forEach(art =>
    art.setAttribute(
      "style",
      "background-image: url(" + playlistData[currentSong]["album"]["cover"]
    )
  );

  music.innerHTML =
    '<source src="' +
    playlistData[currentSong]["preview"] +
    '" type="audio/mp3">';
  music.load();
}

function reset() {
  fireEvent(pauseButton, "click");
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
  songs.forEach(song => (song.innerHTML = playlist[currentSong]["song"]));
  songs.forEach(song => (song.title = playlist[currentSong]["song"]));
  if (album) {
    album.innerHTML = playlist[currentSong]["album"];
    album.title = playlist[currentSong]["album"];
  }
  artists.forEach(
    artist => (artist.innerHTML = playlist[currentSong]["artist"])
  );
  artists.forEach(artist => (artist.title = playlist[currentSong]["artist"]));
  artworks.forEach(art =>
    art.setAttribute(
      "style",
      "background-image: url(" + playlist[currentSong]["artwork"]
    )
  );
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
  // clearTimeout(rotate_timer);
  // clearTimeout(arm_rotate_timer);

  if (currentSong + 1 == playlistData.length) {
    currentSong = 0;
    music.innerHTML =
      '<source src="' +
      playlistData[currentSong]["preview"] +
      '" type="audio/mp3">';
  } else {
    currentSong++;
    music.innerHTML =
      '<source src="' +
      playlistData[currentSong]["preview"] +
      '" type="audio/mp3">';
  }

  setTrackData();

  duration = music.duration;
  musicDuration.innerHTML = formatSecondsAsTime(music.duration.toString());
  music.play();
}

function previousFunc() {
  // arm.setAttribute("style", "transition: transform 800ms;");
  // arm.style.transform = "rotate(-45deg)";
  // arm.style.transform = "rotate(-45deg)";
  // armrot = -45;
  // clearTimeout(rotate_timer);
  // clearTimeout(arm_rotate_timer);

  if (currentSong - 1 == -1) {
    currentSong = playlistData.length - 1;
    music.innerHTML =
      '<source src="' +
      playlistData[currentSong]["preview"] +
      '" type="audio/mp3">';
  } else {
    currentSong--;
    music.innerHTML =
      '<source src="' +
      playlistData[currentSong]["preview"] +
      '" type="audio/mp3">';
  }

  setTrackData();

  duration = music.duration;
  musicDuration.innerHTML = formatSecondsAsTime(music.duration.toString());
  music.play();
}

function setTrack(index) {
  currentSong = index;

  setTrackData();

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
    for (let i = 0; i < playlistData.length; i++) {
      const element = playlistData[i];
      if (event.target.getAttribute("data-mp3") == element.preview) {
        setTrack(i);
      }
    }
  } else if (event.target.className == "far fa-play-circle") {
    for (let i = 0; i < playlistData.length; i++) {
      const element = playlistData[i];
      if (event.target.parentNode.getAttribute("data-mp3") == element.preview) {
        setTrack(i);
      }
    }
  }
});
