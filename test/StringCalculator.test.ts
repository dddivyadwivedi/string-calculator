import { describe, expect, it } from "vitest";
import { StringCalculator } from '../src/StringCalculator'

describe('StringCalculator', () => {
    it('It should return 0 for an empty string parameter', () => {
        expect(StringCalculator('')).toBe(0);
    });
    it('It should return the number itself if paramater passed is single number', () => {
        expect(StringCalculator('1')).toBe(1);
    })
    it('It should return the sum of two comma separated numbers', () => {
        expect(StringCalculator('9,2')).toBe(11);
        expect(StringCalculator('50,1')).toBe(51);
    })
});