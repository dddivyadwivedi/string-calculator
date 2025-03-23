import { describe, expect, it } from "vitest";
import { StringCalculator } from '../src/StringCalculator'

describe('StringCalculator', () => {
    it('It should return 0 for an empty string parameter', () => {
        expect(StringCalculator('')).toBe(0);
    });
    it('It should return the number itself if paramater passed is single number', () => {

    })
});