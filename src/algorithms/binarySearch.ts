/*
 *   list must be a sorted array
 *   returns the index of the target in the list if found
 *   returns undefined if not found
 */
const binarySearch = (list: number[], target: number): number | undefined => {
  const notFoundMessage = `${target} not found in the list`;

  const length = list.length;
  if (length === 0) {
    return undefined;
  }

  let min = 0;
  let max = list.length - 1;
  while (min <= max) {
    const mid = Math.floor((max + min) / 2);

    if (list[mid] === target) {
      return mid;
    }

    if (list[mid] > target) {
      max = mid - 1;
    }

    if (list[mid] < target) {
      min = mid + 1;
    }
  }

  return undefined;
};

export default binarySearch;
