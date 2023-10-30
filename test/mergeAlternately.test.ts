import { describe, expect, it } from '@jest/globals';
import mergeAlternately from '../problems/mergeAlternately';

describe('mergeAlternately', () => {
  it('should merge two strings alternately', () => {
    // Test Case 1: Strings of equal length
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');

    // Test Case 2: First string shorter
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');

    // Test Case 3: Second string shorter
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');

    // Additional Test Case 4: Both strings empty
    expect(mergeAlternately('', '')).toBe('');

    // Additional Test Case 5: First string empty, second string non-empty
    expect(mergeAlternately('', 'xyz')).toBe('xyz');

    // Additional Test Case 6: First string non-empty, second string empty
    expect(mergeAlternately('123', '')).toBe('123');

    // Additional Test Case 7: Both strings with special characters
    expect(mergeAlternately('@#$', '&*%')).toBe('@&#*$%');
  });
});