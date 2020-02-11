import "./styles.css";
import "./player/player";
import axios from "./axios/axios";

document.documentElement.addEventListener("click", () => {
  axios
    .get("/playlist.json")
    .then(response => {
      // преобразование объекта в массив
      let arr = [];
      for (const key in response.data) {
        if (response.data.hasOwnProperty(key)) {
          const element = response.data[key];
          arr.push(element);
        }
      }

      // console.log(response.data); // response.data - полученные данные от запроса
      console.log(arr);
    })
    .catch(error => {
      console.log(error);
    });
});
