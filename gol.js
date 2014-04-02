/// <reference path="gol.d.ts"/>
var GOL = (function () {
    function GOL() {
        this.grid = new Grid();
    }
    return GOL;
})();
;

var Grid = (function () {
    function Grid() {
        this.cells = [new Cell()];
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
