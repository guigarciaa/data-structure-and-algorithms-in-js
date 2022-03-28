const numbersForPushOrRemove = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/** Insert or remove value in last position in array  */
numbersForPushOrRemove.push(10); // add value in last position in array
numbersForPushOrRemove.pop(); // remove value in last position in array

/** Insert or remove value in first position in array */
numbersForPushOrRemove.unshift(-1); // add value in first position in array
numbersForPushOrRemove.shift(); // remove value in first position in array

/** Insert or remove value in any position in array */
numbersForPushOrRemove.splice(5, 3); // Starting postion 5 in array remove 3 elements in array;
numbersForPushOrRemove.splice(5, 0, 6, 7, 8); // Starting position 2 in array, not remove any value (0), and add the values 1,2,3 in array.

/**
 * CONCAT ARRAYS
 */
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
const concatNumbers = negativeNumbers.concat(zero, positiveNumbers);
/**
 * output this concat is -3, -2, -1, 0, 1, 2, 3
 */

/**
 * INTERATORS
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// return true if number is even
const isEven = (value: number) => value % 2 === 0;

/** method every iterates through the elements until this method return false */
numbers.every(isEven);

/** method some iterates through the elements until this method return true */
numbers.some(isEven);

/** the map method iterates through the elements for array and return a new array based on the logic entered */
numbers.map(isEven); // output [false, true, false, true, false, true, false, true, false, true, false, true, false, true,false];

/** the filter method */
numbers.filter(isEven); // output [2, 4, 6, 8, 10, 12, 14]

/** the reducer method */
numbers.reduce((previous, current) => previous + current); // output 120;
