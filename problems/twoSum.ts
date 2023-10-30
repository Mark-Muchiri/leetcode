function twoSum(nums: number[], target: number) {
  // Create a Map to store each number in the array and its index.
  const numToIndex = new Map<number, number>();

  // Loop through the array 'nums'.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number 
    // (i.e., the number needed to reach the target).
    const complement = target - nums[ i ];

    // Check if the complement exists in 'numToIndex' Map.
    if (numToIndex.has(complement)) {
      // If it exists, return the indices of the two numbers.
      return [ numToIndex.get(complement)!, i ];
    }

    // If the complement doesn't exist, add the current 
    // number and its index to the Map.
    numToIndex.set(nums[ i ], i);

  }

  // If no solution is found, return an empty array 
  // (no valid answer).
  return [];
}

export default twoSum;
