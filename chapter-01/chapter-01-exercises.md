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
