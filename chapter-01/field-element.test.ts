import { describe, expect, it } from "vitest";

import {
    add,
    createFieldElement,
    div,
    equals,
    mul,
    notEquals,
    pow,
    sub,
} from "./field-element";

describe("FieldElement", () => {
    describe("test_ne", () => {
        it("should handle equality and inequality correctly", () => {
            const a = createFieldElement(2, 31);
            const b = createFieldElement(2, 31);
            const c = createFieldElement(15, 31);

            expect(equals(a, b)).toBe(true);
            expect(notEquals(a, c)).toBe(true);
            expect(notEquals(a, b)).toBe(false);
        });
    });

    describe("test_add", () => {
        it("should add field elements correctly", () => {
            let a = createFieldElement(2, 31);
            let b = createFieldElement(15, 31);
            expect(equals(add(a, b), createFieldElement(17, 31))).toBe(true);

            a = createFieldElement(17, 31);
            b = createFieldElement(21, 31);
            expect(equals(add(a, b), createFieldElement(7, 31))).toBe(true);
        });
    });

    describe("test_sub", () => {
        it("should subtract field elements correctly", () => {
            let a = createFieldElement(29, 31);
            let b = createFieldElement(4, 31);
            expect(equals(sub(a, b), createFieldElement(25, 31))).toBe(true);

            a = createFieldElement(15, 31);
            b = createFieldElement(30, 31);
            expect(equals(sub(a, b), createFieldElement(16, 31))).toBe(true);
        });
    });

    describe("test_mul", () => {
        it("should multiply field elements correctly", () => {
            const a = createFieldElement(24, 31);
            const b = createFieldElement(19, 31);
            expect(equals(mul(a, b), createFieldElement(22, 31))).toBe(true);
        });
    });

    describe("test_pow", () => {
        it("should raise field elements to powers correctly", () => {
            let a = createFieldElement(17, 31);
            expect(equals(pow(a, 3), createFieldElement(15, 31))).toBe(true);

            a = createFieldElement(5, 31);
            const b = createFieldElement(18, 31);
            expect(equals(mul(pow(a, 5), b), createFieldElement(16, 31))).toBe(
                true
            );
        });
    });

    describe("test_div", () => {
        it("should divide field elements correctly", () => {
            let a = createFieldElement(3, 31);
            let b = createFieldElement(24, 31);
            expect(equals(div(a, b), createFieldElement(4, 31))).toBe(true);

            a = createFieldElement(17, 31);
            expect(equals(pow(a, -3), createFieldElement(29, 31))).toBe(true);

            a = createFieldElement(4, 31);
            b = createFieldElement(11, 31);
            expect(equals(mul(pow(a, -4), b), createFieldElement(13, 31))).toBe(
                true
            );
        });
    });
});
