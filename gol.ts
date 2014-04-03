/// <reference path="gol.d.ts"/>

class GOL {
  grid = new Grid();
  public tick = function () {
    this.grid.cells[0].isDead = true;
  };
};

class Grid {
  cells = [new Cell()];
  init = function (alivePositions) {
    for (var i = 0, len = alivePositions.length; i < len; i++) {
      var pos = alivePositions[i];
      this.cells[pos.x, pos.y] = new Cell();
      this.cells[pos.x, pos.y].isDead = false;
    }
  };
  isAlive = function (x, y) {
    return false;
  }
};

class Cell {
  isDead = true;
};
