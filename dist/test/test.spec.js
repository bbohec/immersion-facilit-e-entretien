"use strict";
const f = (a, b) => a + b;
describe('Testing environnement check', () => {
    it('Unit test - FAIL', () => {
        expect(true).toEqual(false);
    });
    it('Unit test - PASS', () => {
        expect(true).toEqual(true);
        expect(f(1, 2)).toEqual(3);
    });
});