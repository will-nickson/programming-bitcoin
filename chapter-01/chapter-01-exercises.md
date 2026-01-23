# Exercise 1

```typescript
const notEquals = (a: FieldElement, b: FieldElement): boolean => {
    return !equals(a, b);
};
```

# Exercise 2

- (44 + 33) % 57 = 20
- (9 - 29) % 57 = 37
- (17 + 42 + 49) % 57 = 51
- (52 - 30 - 38) % 57 = 41

# Exercise 3

```typescript
const sub = (a: FieldElement, b: FieldElement): FieldElement => {
    if (a.prime !== b.prime) {
        throw new TypeError("Cannot subtract two numbers in different Fields");
    }
    const num = (a.num - b.num + a.prime) % a.prime;
    return createFieldElement(num, a.prime);
};
```

# Exercise 4

- (95 \* 45 \* 31) % 97 = 23
- (17 \* 13 \* 19 \* 44) % 97 = 68
- (12<sup>7</sup> \* 77<sup>49</sup>) % 97 = (35831808 \* 2.7418616e+92) % 97 = 63

# Exercise 5

```typescript
for (const k of [1, 3, 7, 13, 18]) {
    const a = [];
    for (const i of [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ]) {
        a.push((k * i) % 19);
    }
    console.log(a);
}

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
[0, 3, 6, 9, 12, 15, 18, 2, 5, 8, 11, 14, 17, 1, 4, 7, 10, 13, 16];
[0, 7, 14, 2, 9, 16, 4, 11, 18, 6, 13, 1, 8, 15, 3, 10, 17, 5, 12];
[0, 13, 7, 1, 14, 8, 2, 15, 9, 3, 16, 10, 4, 17, 11, 5, 18, 12, 6];
[0, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Sorted
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
```

# Exercise 6

```typescript
const mul = (a: FieldElement, b: FieldElement): FieldElement => {
    if (a.prime !== b.prime) {
        throw new TypeError("Cannot multiply two numbers in different Fields");
    }
    const num = (a.num * b.num) % a.prime;
    return createFieldElement(num, a.prime);
};
```

# Exercise 7

```typescript
const primes = [7, 11, 17, 31];

function modPow(base, exponent, modulus) {
    let result = 1;
    base = base % modulus;

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = (result * base) % modulus;
        }
        exponent = Math.floor(exponent / 2);
        base = (base * base) % modulus;
    }

    return result;
}

for (const p of primes) {
    const a = [];
    const field = Array.from({ length: p - 1 }, (_, i) => i + 1);
    for (const i of field) {
        a.push(modPow(i, p - 1, p));
    }
    console.log(a);
}

[1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
[
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
];
```
