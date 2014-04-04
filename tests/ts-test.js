describe('Jasmine', function () {
    it('Should work with typescript', function () {
        expect(true).toBeTruthy();
    });

    it('can access namespace GOL', function () {
        expect(GOL).toBeDefined();
    });
});

describe('Game of Life', function () {
    var gol;

    beforeEach(function () {
        gol = new GOL();
    });

    it('has a grid of cells', function () {
        expect(gol._grid).toBeDefined();
    });

    it('can evolve one generation', function () {
        expect(typeof gol.tick).toBe('function');
    });

    describe('tick method', function () {
        it('kills cells with fewer than two live neighbours', function () {
            gol._grid.init([{ x: 0, y: 0 }]);

            gol.tick();

            expect(gol._grid.isAlive(0, 0)).toBeFalsy();
        });

        it('kills cells with more than three live neighbours', function () {
            gol._grid.init([
                { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 },
                { x: 1, y: 1 }, { x: 0, y: -1 }]);

            gol.tick();

            expect(gol._grid.isAlive(0, 0)).toBeFalsy();
        });

        xit('spawn cells with exactly three live neighbours', function () {
            gol._grid.init([
                { x: 0, y: 1 }, { x: 1, y: 0 },
                { x: 1, y: 1 }]);

            gol.tick();

            expect(gol._grid.isAlive(0, 0)).toBeTruthy();
        });
    });

    describe('Grid', function () {
        var grid;

        beforeEach(function () {
            grid = gol._grid;
        });

        it('has an initialize method called init', function () {
            expect(typeof grid.init).toBe('function');
        });

        describe('init', function () {
            it('can create a single specified living cell', function () {
                grid.init([{ x: 0, y: 0 }]);

                expect(grid.isAlive(0, 0)).toBeTruthy();
            });

            it('can create multiple specified living cells', function () {
                var cellPos1 = { x: 0, y: 0 }, cellPos2 = { x: 1, y: 0 }, cellPos3 = { x: 2, y: 3 };

                grid.init([cellPos1, cellPos2, cellPos3]);

                expect(grid.isAlive(0, 0)).toBeTruthy();
                expect(grid.isAlive(1, 0)).toBeTruthy();
                expect(grid.isAlive(2, 3)).toBeTruthy();
            });
        });

        it('provides information about a position using method isAlive', function () {
            expect(grid.isAlive(0, 0)).toBeDefined();
        });

        describe('isAlive', function () {
            it('returns false if cell at position is dead', function () {
                expect(grid.isAlive(7, 13)).toBeFalsy();
            });

            it('returns true if cell at position is alive', function () {
                grid.init([{ x: 0, y: 0 }]);

                expect(grid.isAlive(0, 0)).toBeTruthy();
            });
        });

        describe('Cell', function () {
            var cell;

            beforeEach(function () {
                cell = new Cell();
            });

            it('is dead by default', function () {
                expect(cell.isAlive).toBeFalsy();
            });
        });
    });
});
//# sourceMappingURL=ts-test.js.map
