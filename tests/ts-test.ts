/// <reference path="../jasmine/jasmine.d.ts"/>

describe('Jasmine', () => {
    it('Should work with typescript', () => {
        expect(true).toBeTruthy();
    });

    it('is defined in namespace GOL', () => {
        expect(GOL).toBeDefined();
    });
});