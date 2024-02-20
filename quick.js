/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    // We are using the first element as the pivot
    const pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            swapIndex++;
            // Swap elements at swapIndex and i
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }
    // Swap the pivot element with the element at the swapIndex
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
    return swapIndex; // This is the final position of the pivot
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // Recursively sort elements before and after partition
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
module.exports = quickSort;