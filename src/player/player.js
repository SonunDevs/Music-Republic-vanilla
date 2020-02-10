/* Music player
======================================*/
var playlist = [
  {
    song: "Forever",
    album: "Divinely Uninspired To A Hellish Extent",
    artist: "Lewis Capaldi",
    artwork:
      "data:image/jpeg;base64,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",
    mp3: "https://download.mp3-here.icu/c/Lewis-Capaldi-Forever.mp3"
  },
  {
    song: "Eastside",
    album: "Eastside",
    artist: "Benny Blanco feat.Khaled & Halsey",
    artwork:
      "data:image/jpeg;base64,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",
    mp3:
      "http://zaycevfm.net/mp3/zarubezhnaya_2/benny-blanco-halsey-eastside-feat-khalid_(zaycevfm_net).mp3"
  },
  {
    song: "Girls like you",
    album: "Girls like you",
    artist: "Maroon 5",
    artwork:
      "data:image/jpeg;base64,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",
    mp3:
      "https://static.muzlo.cc/download/24717/Maroon-5-Cardi-B_-_Girls-Like-You.mp3"
  }
];

/* General Load / Variables
======================================*/
var rot = 0;
var duration;
var playPercent;
var rotate_timer;
var armrot = -45;
var bufferPercent;
var currentSong = 0;
var arm_rotate_timer;
var arm = document.getElementById("arm");
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
var artwork = document.getElementsByClassName("artwork")[0];
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", bufferUpdate, false);
load();

/* Functions
======================================*/
function load() {
  pauseButton.style.visibility = "hidden";
  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  album.innerHTML = playlist[currentSong]["album"];
  album.title = playlist[currentSong]["album"];
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  artwork.setAttribute(
    "style",
    "background:url(https://i.imgur.com/3idGgyU.png), url('" +
      playlist[currentSong]["artwork"] +
      "') center no-repeat;"
  );
  music.innerHTML =
    '<source src="' + playlist[currentSong]["mp3"] + '" type="audio/mp3">';
  music.load();
}
function reset() {
  rotate_reset = setInterval(function() {
    Rotate();
    if (rot == 0) {
      clearTimeout(rotate_reset);
    }
  }, 1);
  fireEvent(pauseButton, "click");
  armrot = -45;
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
  song.innerHTML = playlist[currentSong]["song"];
  song.title = playlist[currentSong]["song"];
  album.innerHTML = playlist[currentSong]["album"];
  album.title = playlist[currentSong]["album"];
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  artwork.setAttribute(
    "style",
    "background:url(https://i.imgur.com/3idGgyU.png), url('" +
      playlist[currentSong]["artwork"] +
      "') center no-repeat;"
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
}
function bufferUpdate() {
  bufferPercent = timelineWidth * (music.buffered.end(0) / duration);
  bufferhead.style.width = bufferPercent + "px";
}
function Rotate() {
  if (rot == 361) {
    artwork.style.transform = "rotate(0deg)";
    rot = 0;
  } else {
    artwork.style.transform = "rotate(" + rot + "deg)";
    rot++;
  }
}
function RotateArm() {
  if (armrot > -12) {
    arm.style.transform = "rotate(-38deg)";
    armrot = -45;
  } else {
    arm.style.transform = "rotate(" + armrot + "deg)";
    armrot = armrot + 26 / duration;
  }
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
    rotate_timer = setInterval(function() {
      if (!music.paused && !music.ended && 0 < music.currentTime) {
        Rotate();
      }
    }, 10);
    if (armrot != -45) {
      arm.setAttribute("style", "transition: transform 800ms;");
      arm.style.transform = "rotate(" + armrot + "deg)";
    }
    arm_rotate_timer = setInterval(function() {
      if (!music.paused && !music.ended && 0 < music.currentTime) {
        if (armrot == -45) {
          arm.setAttribute("style", "transition: transform 800ms;");
          arm.style.transform = "rotate(-38deg)";
          armrot = -38;
        }
        if (arm.style.transition != "") {
          setTimeout(function() {
            arm.style.transition = "";
          }, 1000);
        }
        RotateArm();
      }
    }, 1000);
  },
  false
);
music.addEventListener(
  "pause",
  function() {
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = "rotate(-45deg)";
    playButton.style.visibility = "visible";
    pause.style.visibility = "hidden";
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
  },
  false
);
next.onclick = function() {
  arm.setAttribute("style", "transition: transform 800ms;");
  arm.style.transform = "rotate(-45deg)";
  clearTimeout(rotate_timer);
  clearTimeout(arm_rotate_timer);
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  arm.style.transform = "rotate(-45deg)";
  armrot = -45;
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
  album.innerHTML = playlist[currentSong]["album"];
  album.title = playlist[currentSong]["album"];
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  artwork.setAttribute(
    "style",
    "transform: rotate(" +
      rot +
      "deg); background:url(https://i.imgur.com/3idGgyU.png), url('" +
      playlist[currentSong]["artwork"] +
      "') center no-repeat;"
  );
  music.load();
  duration = music.duration;
  music.play();
};
previous.onclick = function() {
  arm.setAttribute("style", "transition: transform 800ms;");
  arm.style.transform = "rotate(-45deg)";
  clearTimeout(rotate_timer);
  clearTimeout(arm_rotate_timer);
  playhead.style.width = "0px";
  bufferhead.style.width = "0px";
  timer.innerHTML = "0:00";
  music.innerHTML = "";
  arm.style.transform = "rotate(-45deg)";
  armrot = -45;
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
  album.innerHTML = playlist[currentSong]["album"];
  album.title = playlist[currentSong]["album"];
  artist.innerHTML = playlist[currentSong]["artist"];
  artist.title = playlist[currentSong]["artist"];
  artwork.setAttribute(
    "style",
    "transform: rotate(" +
      rot +
      "deg); background:url(https://i.imgur.com/3idGgyU.png), url('" +
      playlist[currentSong]["artwork"] +
      "') center no-repeat;"
  );
  music.load();
  duration = music.duration;
  music.play();
};
volume.oninput = function() {
  music.volume = volume.value;
  visablevolume.style.width = (80 - 11) * volume.value + "px";
};
music.addEventListener(
  "canplay",
  function() {
    duration = music.duration;
  },
  false
);
