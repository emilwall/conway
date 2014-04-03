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
      var key = "x"+pos.x+"y"+pos.y;
      this.cells[key] = new Cell();
      this.cells[key].isDead = false;
    }
  };
  isAlive = function (x, y) {
    var cell = this.cells["x"+x+"y"+y];
    return (typeof cell !== "undefined") && !cell.isDead;
  }
};

class Cell {
  isDead = true;
};
