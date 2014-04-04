/// <reference path="gol.d.ts"/>

class GOL {
  grid = new Grid();
  public tick = function () {
    var key;
    for (key in this.grid.cells) {
      if (typeof key === "string" && key.charAt(0) === 'x') {
        this.grid.cells[key].isAlive = false;
      }
    }
  };
};

class Grid {
  cells = {};
  init = function (alivePositions) {
    for (var i = 0, len = alivePositions.length; i < len; i++) {
      var pos = alivePositions[i];
      var key = "x"+pos.x+"y"+pos.y;
      this.cells[key] = new Cell();
      this.cells[key].isAlive = true;
    }
  };
  isAlive = function (x, y) {
    var cell = this.cells["x"+x+"y"+y];
    return (typeof cell !== "undefined") && cell.isAlive;
  }
};

class Cell {
  isAlive = false;
};
