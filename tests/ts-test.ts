/// <reference path="../jasmine/jasmine.d.ts"/>

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

    it('has a cell', () => {
        expect(gol.cells[0]).toBeDefined();
    });
});
