const { problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8, problem9, problem10 } = require('./index');

test("", async function() {
  expect(problem1(0,1,1)).toBe(61);
  expect(problem1(1,1,1)).toBe(3661);
  expect(problem1(0,0,0)).toBe(0);
});

test("", async function() {
  expect(problem2([])).toBe(0);
  expect(problem2([1,2,3,4,5])).toBe(15);
});

test("", async function() {
  expect(problem3("hello")).toBe("HELLO");
  expect(problem3("World")).toBe("WORLD");
});

test("", async function() {
  expect(problem4(24)).toBe(-24);
  expect(problem4(0)).toBe(0);
  expect(problem4(-5)).toBe(-5);
});

test("", async function() {
  expect(problem5(3,2)).toBe([3,6].toString());
  expect(problem5(4,4)).toBe([4,8,12,16].toString());
});

test("", async function() {
  expect(problem6([1,"1"])).toBe(2);
  expect(problem6([2,"3",7])).toBe(12);
});

test("", async function() {
  expect(problem7(2)).toBe(16);
  expect(problem7(11)).toBe(99);
});

test("", async function() {
  expect(problem8([2,2])).toBe([4,4].toString());
  expect(problem8([2,2,4,5])).toBe([4,4,8,10].toString());
});

test("", async function() {
  expect(problem9("world")).toBe("orl");
  expect(problem9("google")).toBe("oogl");
});

test("", async function() {
  expect(problem10("green")).toBe("yellow");
  expect(problem10("yellow")).toBe("red");
  expect(problem10("red")).toBe("green");
});
