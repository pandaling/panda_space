import { calculateCircumference, calculatePI } from "../src/utils/measurements";

test('pi value without decimal should be 3', () => {
  let pi = calculatePI(0);

  expect(pi).toBe(3);
});

test('circumference of the sun for pi value of 3 should be sdaaa', () => {
  let circumference = calculateCircumference(3);

  expect(circumference).toBe(4177590);
});
