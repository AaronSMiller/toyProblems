/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set(); // Set to store seen numbers
    while (n !== 1 && !seen.has(n)) {
        seen.add(n); // Add current number to the set
        let sum = 0;
        while (n > 0) {
            const digit = n % 10; // Get the last digit
            sum += digit * digit; // Add square of digit to the sum
            n = Math.floor(n / 10); // Remove the last digit
        }
        n = sum; // Update n with the sum of squares of digits
    }
    return n === 1; // Return true if n is 1, false otherwise
};