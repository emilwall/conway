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
            for (var i = 0, len = alivePositions.length; i < len; i++) {
                var pos = alivePositions[i];
                this.cells[pos.x, pos.y] = new Cell();
                this.cells[pos.x, pos.y].isDead = false;
            }
        };
        this.isAlive = function (x, y) {
            return false;
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
