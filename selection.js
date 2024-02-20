function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Assign the first element as the minimum
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Compare and find the actual minimum element
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // If the minimum is not the position you started with, swap them
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
module.exports = selectionSort;