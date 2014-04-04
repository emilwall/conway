/// <reference path="../jasmine/jasmine.d.ts"/>

describe('Jasmine', () => {
    it('Should work with typescript', () => {
        expect(true).toBeTruthy();
    });

    it('can access namespace GOL', () => {
        expect(GOL).toBeDefined();
    });
});

describe('Game of Life', () => {
    var gol : GOL;

    beforeEach(() => {
        gol = new GOL();
    });

    it('has a grid of cells', () => {
        expect(gol.grid).toBeDefined();
    });

    it('can evolve one generation', () => {
        expect(typeof gol.tick).toBe('function');
    });

    describe('tick method', () => {
        it('kills cells with fewer than two live neighbours', () => {
            gol.grid.init([{x: 0, y: 0}]);

            gol.tick();

            expect(gol.grid.isAlive(0, 0)).toBeFalsy();
        });
    });

    describe('Grid', () => {
        var grid : Grid;

        beforeEach(function () {
            grid = gol.grid;
        });

        it('has an initialize method called init', () => {
            expect(typeof grid.init).toBe('function');
        });

        describe('init', () => {
            it('can create a single specified living cell', () => {
                grid.init([{ x: 0, y: 0 }]);

                expect(grid.isAlive(0, 0)).toBeTruthy();
            });

            it('can create multiple specified living cells', () => {
                var cellPos1 = { x: 0, y: 0 },
                    cellPos2 = { x: 1, y: 0 },
                    cellPos3 = { x: 2, y: 3 }

                grid.init([cellPos1, cellPos2, cellPos3]);

                expect(grid.isAlive(0, 0)).toBeTruthy();
                expect(grid.isAlive(1, 0)).toBeTruthy();
                expect(grid.isAlive(2, 3)).toBeTruthy();
            });
        });

        it('provides information about a position using method isAlive', () => {
            expect(grid.isAlive(0, 0)).toBeDefined();
        });

        describe('isAlive', () => {
            it('returns false if cell at position is dead', () => {
                expect(grid.isAlive(7, 13)).toBeFalsy();
            });

            it('returns true if cell at position is alive', () => {
                grid.init([{ x: 0, y: 0 }]);

                expect(grid.isAlive(0, 0)).toBeTruthy();
            });
        });

        describe('Cell', () => {
            var cell : Cell;

            beforeEach(() => {
                cell = new Cell();
            });

            it('is dead by default', () => {
                expect(cell.isAlive).toBeFalsy();
            });
        });
    });
});

// TODO Custom matcher: toBeOfType
