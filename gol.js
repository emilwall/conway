var GOL = (function () {
    function GOL() {
        this._grid = new Grid();
        this.tick = function () {
            var key;
            for (key in this._grid.cells) {
                if (typeof key === "string" && key.charAt(0) === 'x') {
                    this._grid.cells[key].isAlive = false;
                }
            }
        };
    }
    return GOL;
})();
;

var Grid = (function () {
    function Grid() {
        this.cells = {};
        this.init = function (alivePositions) {
            for (var i = 0, len = alivePositions.length; i < len; i++) {
                var pos = alivePositions[i];
                var key = "x" + pos.x + "y" + pos.y;
                this.cells[key] = new Cell();
                this.cells[key].isAlive = true;
            }
        };
        this.isAlive = function (x, y) {
            var cell = this.cells["x" + x + "y" + y];
            return (typeof cell !== "undefined") && cell.isAlive;
        };
    }
    return Grid;
})();
;

var Cell = (function () {
    function Cell() {
        this.isAlive = false;
    }
    return Cell;
})();
;
//# sourceMappingURL=gol.js.map
