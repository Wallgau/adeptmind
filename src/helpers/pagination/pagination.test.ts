import { generatePagesRange, generateRange, getCurrentPageItems } from './index';

const testRenderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('getCurrentPageItems', () => {
    test('gets first page items (items on page 5)', () => {
        expect(getCurrentPageItems<number>(testRenderItems, 0, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    test('gets second page items (items on page 5)', () => {
        expect(getCurrentPageItems<number>(testRenderItems, 1, 5)).toEqual([6, 7, 8, 9, 10]);
    });

    test('gets first page items (items on page 1)', () => {
        expect(getCurrentPageItems<number>(testRenderItems, 0, 1)).toEqual([1]);
    });

    test('returns all items if items on page is bigger than total items', () => {
        expect(getCurrentPageItems<number>(testRenderItems, 0, 11)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('works with no items to render', () => {
        expect(getCurrentPageItems<number>([], 0, 10)).toEqual([]);
    });
});

describe('generatePagesRange', () => {
    test('returns a slice of 5 "pages" from the beginning, active page 0', () => {
        expect(generatePagesRange(10, 0, 4)).toEqual([0, 1, 2, 3, 4]);
    });

    test('returns a slice of 5 "pages" from the end, active page 1', () => {
        expect(generatePagesRange(10, 1, 4)).toEqual([0, 1, 2, 3, 4]);
    });

    test('returns a slice of 5 "pages" from the middle, active page 10', () => {
        expect(generatePagesRange(20, 10, 4)).toEqual([8, 9, 10, 11, 12]);
    });

    test('returns a slice of 5 "pages", active page 9', () => {
        expect(generatePagesRange(10, 9, 4)).toEqual([5, 6, 7, 8, 9]);
    });

    test('returns a slice of 3 pages if totalPages is less than display pages', () => {
        expect(generatePagesRange(3, 0, 4)).toEqual([0, 1, 2]);
    });

    test('throws Error if total pages 0', () => {
        expect(() => { generatePagesRange(0, 0, 4); }).toThrow(Error('Unexpected error in pagination'));
    });
});

describe('generateRange', () => {
    test('returns a array of [from, from+1, from+2 ... to]', () => {
        expect(generateRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    });

    test('returns a array of [from, to]', () => {
        expect(generateRange(1, 2)).toEqual([1, 2]);
    });

    test('returns a array of [0]', () => {
        expect(generateRange(0, 0)).toEqual([0]);
    });

    test('returns a array of []', () => {
        expect(generateRange(1, 0)).toEqual([]);
    });
});
