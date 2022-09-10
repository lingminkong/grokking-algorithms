import binarySearch from '../../src/algorithms/binarySearch.js';

describe('Test binarySearch', () => {
  it('Should return correct answer', () => {
    const result = binarySearch([], 1);

    expect(result).toBeUndefined();
  });
});
