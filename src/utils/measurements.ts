const SUN_DIAMETER = 1392530; // kilometers

export let cachePi = 0;
export let cacheCicumference = 0;

/**
 * Based on `Nilkantha's series`
 * 
 * π = 3 + 4 / (2*3*4) – 4 / (4*5*6) + 4 / (6*7*8) – . . .
 */
export function calculatePI(decimal: number) {
  let pi = 3, n = 2, sign = 1;

  for (let i = 0; i <= 1000000; i++) {
    pi = pi + (sign * (4 / ((n) * (n + 1)
      * (n + 2))));

    // Addition and subtraction of alternate sequences
    sign = sign * (-1);

    // Increment by 2 according to formula
    n += 2;
  }

  console.log('PI: ', pi.toFixed(decimal));
  cachePi = Number(pi.toFixed(decimal));
  return Number(pi.toFixed(decimal));
}

export const calculateCircumference = (pi: number) => {
  const sunCircumference = pi * SUN_DIAMETER;

  cacheCicumference = Number(sunCircumference.toFixed(4));

  return cacheCicumference;
};
