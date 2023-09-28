import ui from './ui.js';
import Map from './map.js'
import Item from './item.js';

export default class Player {
  constructor() {
    this.x = 2;
    this.y = 2;
    this.skin = 'P';
    this.map = new Map; // mapa
    this.item = new Item; // item

    ui.screen.on('keypress', (char, key) => {
      const prevX = this.x;
      const prevY = this.y;

      if (key.name === 'left') {
        this.x--;
      }

      if (key.name === 'right') {
        this.x++;
      }

      if (key.name === 'up') {
        this.y--;
      }

      if (key.name === 'down') {
        this.y++;
      }

      // si el jugador está intentando moverse fuera de los limites del mapa
      if (this.map.tiles[this.y][this.x] === 1) {
        // El jugador está intentando moverse a una casilla de borde 1, revierte la posición
        this.x = prevX;
        this.y = prevY;
      }
    });
  }

  draw() {
    ui.printCharacter(this.x, this.y, this.skin);
  }
}
