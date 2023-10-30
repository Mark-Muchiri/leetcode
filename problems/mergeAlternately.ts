/*
This function merges two strings alternately by appending 
characters from each string one by one.

@param {string} word1 - The first input string to be merged.
@param {string} word2 - The second input string to be merged.
@return {string} - The merged string.
*/
function mergeAlternately(word1: string, word2: string): string {
  let result = ''; // Initialize an empty string to store the merged result.

  // Use a loop to iterate through the characters of both input strings alternately.
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    // If 'i' is within the bounds of 'word1', append the character from 'word1' to the result.
    i < word1.length && (result = result + word1[ i ]);

    // If 'i' is within the bounds of 'word2', append the character from 'word2' to the result.
    i < word2.length && (result = result + word2[ i ]);
  }

  return result; // Return the merged string.
}

// Export the function for testing or use in other modules.
export default mergeAlternately;
