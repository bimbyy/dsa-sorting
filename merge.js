function merge(arr1, arr2) {
    let i = 0, j = 0;
    let merged = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // Append remaining elements from arr1
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    // Append remaining elements from arr2
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
module.exports = { merge, mergeSort};