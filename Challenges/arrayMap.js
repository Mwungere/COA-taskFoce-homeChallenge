function hasSubarrayWithSum(arr, target) {
    let start = 0;       // Initialize the start pointer
    let currentSum = 0;  // Initialize the current sum of the subarray

    // Loop through the array using the end pointer
    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];  // Add the current element to the current sum

        // While the current sum is greater than the target and start is less than or equal to end
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];  // Subtract the element at the start pointer from the current sum
            start++;  // Move the start pointer to the right
        }

        // Check if the current sum equals the target
        if (currentSum === target) {
            return true;  // If so, return true
        }
    }

    return false;  // If no subarray is found, return false
}

// Ex:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
