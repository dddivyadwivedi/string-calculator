export const StringCalculator = (numbers: string): number => {
    // Check for empty string and return 0
    if (numbers === '') {
        return 0;
    }
    // Check for single single number and return the number itself
    if (numbers.length === 1) {
        return parseInt(numbers);
    }
    return 0;
}