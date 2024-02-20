function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Track if any swapping happens
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (!swapped) {
            break;
        }
    }
    return arr;
}
module.exports = bubbleSort;