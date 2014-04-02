/// <reference path="gol.d.ts"/>
var GOL = (function () {
    function GOL() {
        this.cells = [new Cell()];
    }
    return GOL;
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
