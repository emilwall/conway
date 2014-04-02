/// <reference path="gol.d.ts"/>

class GOL {
    grid = new Grid();
    tick = function () { };
};

class Grid {
    cells = [new Cell()];
};

class Cell {
    isDead = true;
};