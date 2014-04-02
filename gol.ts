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
        this.cells[0].isDead = false;
    };
};

class Cell {
    isDead = true;
};