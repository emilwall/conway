/// <reference path="gol.d.ts"/>
var GOL = (function () {
    function GOL() {
        this.grid = new Grid();
        this.tick = function () {
            this.grid.cells[0].isDead = true;
        };
    }
    return GOL;
})();
;

var Grid = (function () {
    function Grid() {
        this.cells = [new Cell()];
        this.init = function (alivePositions) {
            this.cells[0].isDead = false;
        };
    }
    return Grid;
})();
;

var Cell = (function () {
    function Cell() {
        this.isDead = true;
    }
    return Cell;
})();
;
//# sourceMappingURL=gol.js.map
