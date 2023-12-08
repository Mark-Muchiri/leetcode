import { describe, expect, it } from '@jest/globals';
import twoSum from "../problems/twoSum";

describe('twoSum', () => {
  it('should return the indices of two numbers that add up to the target', () => {
    // Test Case 1: [2,7,11,15], target 9
    expect(twoSum([ 2, 7, 11, 15 ], 9)).toEqual([ 0, 1 ]);

    // Test Case 2: [3,2,4], target 6
    expect(twoSum([ 3, 2, 4 ], 6)).toEqual([ 1, 2 ]);

    // Test Case 3: [3,3], target 6
    expect(twoSum([ 3, 3 ], 6)).toEqual([ 0, 1 ]);
  });

  it('should handle cases with no valid answer', () => {
    // Test Case 4: No valid answer, expect an empty array
    expect(twoSum([ 1, 2, 3, 4 ], 10)).toEqual([]);
  });
});