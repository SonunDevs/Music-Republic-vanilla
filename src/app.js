import "./styles.css";
import "./player/player";
import Logo from './assets/images/logo/music-republic-logo-1.png'

export default class App {
    constructor(title, img) {
      this.title = title
      this.img = img
      this.date = new Date()
    }
  
    toString() {
      return JSON.stringify({
        title: this.title,
        date: this.date.toJSON(),
        img: this.img
      }, null, 2)
    }
  
    get uppercaseTitle() {
      return this.title.toUpperCase()
    }
  }