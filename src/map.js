import ui from './ui.js'

export default class Map {
    constructor() {
        this.tiles = [
            [1, 1, 1, 1, 1, 1, 1, 1], 
            [1, 0, 0, 0, 0, 0, 0, 1], 
            [1, 0, 0, 0, 0, 0, 0, 1], 
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
        ]
    }

    draw() {
        for (let row = 0; row < this.tiles.length; row++) {
          for (let col = 0; col < this.tiles[row].length; col++) {
            if (this.tiles[row][col] === 0) {
              ui.printCharacter(col, row, ' ')
            }
    
            if (this.tiles[row][col] === 1) {
              ui.printCharacter(col, row, '#')
            }
          }
        }
      }
}