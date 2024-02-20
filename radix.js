
//This is using multiple helpers but will do exactly what is required.
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}



/*
This is is case we cant use helpers.
function radixSort(arr) {
    let maxNum = Math.max(...arr) * 10;
    let div = 10;
    while (maxNum / div > 1) {
        let buckets = [...Array(10)].map(() => []); // Create 10 buckets
        for (let i = 0; i < arr.length; i++) {
            buckets[Math.floor((arr[i] % div) / (div / 10))].push(arr[i]);
        }
        arr = [].concat(...buckets);
        div *= 10;
    }
    return arr;
}
*/
module.exports = radixSort;