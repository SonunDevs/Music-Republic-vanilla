import "@babel/polyfill";

export default async function getResponse() {
  let id = 395844;
  let response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem"
  );
  let content = await response.json();
  console.log(content);

  // let key;
  // // let list = document.querySelector('.songs')
  // for (key in content) {
  //   // list.innerHTML += `
  //   //   <li class='song'>
  //   //   <h1>Artist:<a href="${content[key][0].artist.link}"> ${content[key][0].artist.name}</a></h1>
  //   //   <h2><a href="${content[key][0].preview}">${content[key][0].title}</a></h2>
  //   //   <p>Album ${content[key][0].album.title}</p>
  //   //   <img src="${content[key][0].album.cover}">
  //   //   </li>
  //   //   `;

  //   console.log(content[key]);
  // }
}

getResponse();
