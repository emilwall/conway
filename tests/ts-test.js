/// <reference path="../jasmine/jasmine.d.ts"/>
describe('Jasmine', function () {
    it('Should work with typescript', function () {
        expect(true).toBeTruthy();
    });

    it('is defined in namespace/class GOL', function () {
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

    describe('Grid', function () {
        var grid;

        beforeEach(function () {
            grid = gol.grid;
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
                expect(cell.isDead).toBe(true);
            });
        });
    });
});
// TODO Custom matcher: toBeOfType
//# sourceMappingURL=ts-test.js.map
