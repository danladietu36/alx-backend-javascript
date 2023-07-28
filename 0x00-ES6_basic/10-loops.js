/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const array = [];
  for (const item of array) {
    array.push(appendString + item);
  }

  return array;
}
