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

    it('has a cell', function () {
        expect(gol.cells[0]).toBeDefined();
    });
});
//# sourceMappingURL=ts-test.js.map
