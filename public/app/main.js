import ChristmasController from "./component/christmas-controller.js"

console.log("app")


class App {
  constructor() {
    this.controllers = {
      christmasController: new ChristmasController()
    }
  }
}


// @ts-ignore
window.app = new App