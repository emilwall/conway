/// <reference path="gol.d.ts"/>

class GOL {
    grid = new Grid();
};

class Grid {
    cells = [new Cell()];
};

class Cell {
    isDead = true;
};