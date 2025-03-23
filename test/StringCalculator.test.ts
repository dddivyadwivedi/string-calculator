import { describe, expect, it } from "vitest";
import { StringCalculator } from '../src/StringCalculator'

describe('StringCalculator', () => {
    it('It should return 0 for an empty string', () => {
        expect(StringCalculator('')).toBe(0);
    });
});