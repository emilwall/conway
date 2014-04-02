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
            it('creates the specified living cells', function () {
                grid.init([{ x: 0, y: 0 }]);
                expect(grid.cells[0, 0].isDead).toBeFalsy();
            });
        });

        it('has a cell of type Cell', function () {
            expect(grid.cells[0]).toEqual(new Cell());
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
// TODO Custom matcher: toBeOfType
//# sourceMappingURL=ts-test.js.map
