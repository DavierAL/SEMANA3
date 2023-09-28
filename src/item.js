import ui from './ui.js'

export default class Item {
  constructor() {
    this.x = 6
    this.y = 6
    this.skin = 'I'
  }

  draw() {
    ui.printCharacter(this.x, this.y, this.skin)
  }
}
