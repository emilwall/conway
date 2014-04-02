﻿/// <reference path="../jasmine/jasmine.d.ts"/>

describe('Jasmine', () => {
    it('Should work with typescript', () => {
        expect(true).toBeTruthy();
    });

    it('is defined in namespace/class GOL', () => {
        expect(GOL).toBeDefined();
    });
});

describe('Game of Life', () => {
    var gol;

    beforeEach(() => {
        gol = new GOL();
    });

    it('has a grid of cells', () => {
        expect(gol.grid).toBeDefined();
    });

    describe('Grid', () => {
        var grid;

        beforeEach(function () {
            grid = gol.grid;
        });

        it('has a cell of type Cell', () => {
            expect(grid.cells[0]).toEqual(new Cell());
        });

        describe('Cell', () => {
            var cell;

            beforeEach(() => {
                cell = new Cell();
            });

            it('is dead by default', () => {
                expect(cell.isDead).toBe(true);
            });
        });
    });
});

// TODO Custom matcher: toBeOfType
