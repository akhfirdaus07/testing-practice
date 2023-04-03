const {capitalize,reverseString, calculator, caesarCipher, analyzeArray} = require("./index");

test("capitalize first character (example 1)", () => {
  expect(capitalize("marvel")).toBe("Marvel");
});
test("capitalize first character (example 2)", () => {
  expect(capitalize("odin")).toBe("Odin");
});
test("capitalize first character (example 3)", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("reverse string (example 1)", () => {
  expect(reverseString("marvel")).toBe("levram");
});
test("reverse string (example 2)", () => {
  expect(reverseString("odin")).toBe("nido");
});
test("reverse string (example 3)", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("calculator - add operation (example 1)", () => {
  expect(calculator.add(5, 5)).toBe(10);
});
test("calculator - add operation (example 2)", () => {
  expect(calculator.add(1, 5)).toBe(6);
});
test("calculator - add operation (example 3)", () => {
  expect(calculator.add(5, 2)).toBe(7);
});

test("calculator - subtract operation (example 1)", () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});
test("calculator - subtract operation (example 2)", () => {
  expect(calculator.subtract(1, 5)).toBe(-4);
});
test("calculator - subtract operation (example 3)", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("calculator - divide operation (example 1)", () => {
  expect(calculator.divide(5, 5)).toBe(1);
});
test("calculator - divide operation (example 2)", () => {
  expect(calculator.divide(5, 1)).toBe(5);
});
test("calculator - divide operation (example 3)", () => {
  expect(calculator.divide(50, 2)).toBe(25);
});

test("calculator - multiply operation (example 1)", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});
test("calculator - multiply operation (example 2)", () => {
  expect(calculator.multiply(5, 1)).toBe(5);
});
test("calculator - multiply operation (example 3)", () => {
  expect(calculator.multiply(50, 2)).toBe(100);
});

test("Caesar cipher (example 1)", () => {
  expect(caesarCipher("marvel", 1)).toBe("nbswfm");
});
test("Caesar cipher (example 2)", () => {
  expect(caesarCipher("oDin", 10)).toBe("yNsx");
});
test("Caesar cipher (example 3)", () => {
  expect(caesarCipher("Apple oDin", 20)).toBe("Ujjfy iXch");
});

test("analyze array", () => {
  const data = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(data)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});