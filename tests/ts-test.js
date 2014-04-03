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
        expect(gol.grid).toBeDefined();
    });

    it('can evolve one generation', function () {
        expect(typeof gol.tick).toBe('function');
    });

    describe('tick method', function () {
        it('kills cells with fewer than two live neighbours', function () {
            gol.grid.cells[0].isDead = false;

            gol.tick();

            expect(gol.grid.cells[0].isDead).toBeTruthy();
        });
    });

    describe('Grid', function () {
        var grid;

        beforeEach(function () {
            grid = gol.grid;
        });

        it('has an initialize method called init', function () {
            expect(typeof grid.init).toBe('function');
        });

        describe('init', function () {
            it('can create a single specified living cell', function () {
                grid.init([{ x: 0, y: 0 }]);

                expect(grid.cells[0, 0].isDead).toBeFalsy();
            });

            it('can create multiple specified living cells', function () {
                var cellPos1 = { x: 0, y: 0 }, cellPos2 = { x: 1, y: 0 }, cellPos3 = { x: 2, y: 3 };

                grid.init([cellPos1, cellPos2, cellPos3]);

                expect(grid.cells[0, 0].isDead).toBeFalsy();
                expect(grid.cells[1, 0].isDead).toBeFalsy();
                expect(grid.cells[2, 3].isDead).toBeFalsy();
            });
        });

        it('has a cell of type Cell', function () {
            expect(grid.cells[0]).toEqual(new Cell());
        });

        it('provides information about a position using method isAlive', function () {
            expect(grid.isAlive(0, 0)).toBeDefined();
        });

        describe('Cell', function () {
            var cell;

            beforeEach(function () {
                cell = new Cell();
            });

            it('is dead by default', function () {
                expect(cell.isDead).toBeTruthy();
            });
        });
    });
});
//# sourceMappingURL=ts-test.js.map
