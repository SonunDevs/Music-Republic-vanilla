import { createPlaylist } from "../playlist/playlist";
export var playlistData;

export function setPlaylistData(data) {
  if (data) {
    playlistData = data;
  }

  // console.log(playlistData);
  createPlaylist(playlistData);
}

// export var playlist = [
//   {
//     song: "Forever",
//     album: "Divinely Uninspired To A Hellish Extent",
//     artist: "Lewis Capaldi",
//     artwork: "https://m.media-amazon.com/images/I/71aPcfQ5KtL._SS500_.jpg",
//     mp3: "https://download.mp3-here.icu/c/Lewis-Capaldi-Forever.mp3"
//   },
//   {
//     song: "Eastside",
//     album: "Eastside",
//     artist: "Benny Blanco feat.Khaled & Halsey",
//     artwork: "https://upload.wikimedia.org/wikipedia/ru/2/2e/Eastside.jpg",
//     mp3:
//       "http://zaycevfm.net/mp3/zarubezhnaya_2/benny-blanco-halsey-eastside-feat-khalid_(zaycevfm_net).mp3"
//   },
//   {
//     song: "Girls like you",
//     album: "Girls like you",
//     artist: "Maroon 5",
//     artwork:
//       "https://m.media-amazon.com/images/M/MV5BNmNmNGExNDctM2Q3MC00MTU5LTkyYzMtMzMyYmI2MTA3MjU3XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
//     mp3:
//       "https://static.muzlo.cc/download/24717/Maroon-5-Cardi-B_-_Girls-Like-You.mp3"
//   },
//   {
//     song: "Night Witches",
//     album: "Heroes",
//     artist: "Sabaton",
//     artwork: "https://i.ebayimg.com/images/g/9TAAAOSw~OVWxhUH/s-l400.jpg",
//     mp3: "https://download.mp3-here.icu/e/Sabaton-Night-Witches.mp3"
//   },
//   {
//     song: "The day",
//     album: "My Hero Academy",
//     artist: "Porno Graffitti",
//     artwork: "https://st.cdjapan.co.jp/pictures/l/05/37/SECL-1924.jpg",
//     mp3:
//       "https://mn1.sunproxy.net/file/Q1NCTHQ1T3hiY1RiS29wbmpUVjdxbHoveEdzYm82aitvcEk0NWM4ZVdXSDE0eFdmaEY3VG9sbkFXRDdpTm8zU0VUeUZrdnZnVGxoNkFCaTRVd29zbW9iamI3dkxITGQzNEtFcklyb3MyVVE9/Porno_Graffitti_-_The_Day_(mp3.mn).mp3"
//   }
// ];
