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
                var key = "x" + pos.x + "y" + pos.y;
                this.cells[key] = new Cell();
                this.cells[key].isDead = false;
            }
        };
        this.isAlive = function (x, y) {
            var cell = this.cells["x" + x + "y" + y];
            return (typeof cell !== "undefined") && !cell.isDead;
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
