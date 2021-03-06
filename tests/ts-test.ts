﻿/// <reference path="../jasmine/jasmine.d.ts"/>

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
            gol.grid.cells[0].isDead = false;

            gol.tick();

            expect(gol.grid.cells[0].isDead).toBeTruthy();
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
            it('creates the specified living cells', () => {
                grid.init([{ x: 0, y: 0 }]);
                expect(grid.cells[0, 0].isDead).toBeFalsy();
            });
        });

        it('has a cell of type Cell', () => {
            expect(grid.cells[0]).toEqual(new Cell());
        });

        describe('Cell', () => {
            var cell : Cell;

            beforeEach(() => {
                cell = new Cell();
            });

            it('is dead by default', () => {
                expect(cell.isDead).toBeTruthy();
            });
        });
    });
});

// TODO Custom matcher: toBeOfType
