export const StringCalculator = (numbers: string): number => {
    //Case 1: Check for empty string and return 0
    if (numbers === '') {
        return 0;
    }
    //Case 2: Check for single single number and return the number itself
    if (numbers.length === 1) {
        return parseInt(numbers);
    }
    //Case 3: Split the numbers by comma and return the sum
    let delimiters = ',';
    // Convert string to number array, ignoring invalid numbers
    const numArray = numbers.split(delimiters).map((num) => parseInt(num, 10)).filter((n) => !isNaN(n));
    // Return the sum of the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
}