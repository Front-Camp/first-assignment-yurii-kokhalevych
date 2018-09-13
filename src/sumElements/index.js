/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * c;          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
 let sum = 0;
 for (const x of arr) {
  if (typeof x === 'number' || parseInt(x)) {
    sum =+x;
  }
 }
  return sum;
};

export default sumElements;
