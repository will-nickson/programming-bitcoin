// FieldElement type definition
type FieldElement = {
    num: number;
    prime: number;
};

// Factory function to create a FieldElement
export const createFieldElement = (
    num: number,
    prime: number
): FieldElement => {
    if (num >= prime || num < 0) {
        throw new Error(`Num ${num} not in field range 0 to ${prime - 1}`);
    }
    return { num, prime };
};

// Pure functions for FieldElement operations
export const fieldElementToString = (element: FieldElement): string => {
    return `FieldElement_${element.prime}(${element.num})`;
};

export const equals = (a: FieldElement, b: FieldElement | null): boolean => {
    if (b === null) {
        return false;
    }
    return a.num === b.num && a.prime === b.prime;
};

export const notEquals = (a: FieldElement, b: FieldElement): boolean => {
    return !equals(a, b);
};

export const add = (a: FieldElement, b: FieldElement): FieldElement => {
    if (a.prime !== b.prime) {
        throw new TypeError("Cannot add two numbers in different Fields");
    }
    const num = (a.num + b.num) % a.prime;
    return createFieldElement(num, a.prime);
};

export const sub = (a: FieldElement, b: FieldElement): FieldElement => {
    if (a.prime !== b.prime) {
        throw new TypeError("Cannot subtract two numbers in different Fields");
    }
    const num = (a.num - b.num + a.prime) % a.prime;
    return createFieldElement(num, a.prime);
};

export const mul = (a: FieldElement, b: FieldElement): FieldElement => {
    if (a.prime !== b.prime) {
        throw new TypeError("Cannot multiply two numbers in different Fields");
    }
    const num = (a.num * b.num) % a.prime;
    return createFieldElement(num, a.prime);
};

// Helper function for modular exponentiation
export const modPow = (
    base: number,
    exponent: number,
    modulus: number
): number => {
    if (modulus === 1) return 0;
    let result = 1;
    let b = base % modulus;
    let exp = exponent;

    // Handle negative exponents
    if (exp < 0) {
        exp = exp % (modulus - 1);
        if (exp < 0) exp += modulus - 1;
    }

    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * b) % modulus;
        }
        exp = Math.floor(exp / 2);
        b = (b * b) % modulus;
    }
    return result;
};

export const pow = (element: FieldElement, exponent: number): FieldElement => {
    const n = exponent % (element.prime - 1);
    const num = modPow(element.num, n, element.prime);
    return createFieldElement(num, element.prime);
};

export const div = (a: FieldElement, b: FieldElement): FieldElement => {
    if (a.prime !== b.prime) {
        throw new TypeError("Cannot divide two numbers in different Fields");
    }
    // Use Fermat's little theorem: a^(p-1) % p == 1
    // Therefore: 1/n == n^(p-2) % p
    const num = (a.num * modPow(b.num, a.prime - 2, a.prime)) % a.prime;
    return createFieldElement(num, a.prime);
};
