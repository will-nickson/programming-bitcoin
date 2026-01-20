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

const a = createFieldElement(7, 13);
const b = createFieldElement(6, 13);

console.log(a === b);
// false
console.log(a === a);
// true
