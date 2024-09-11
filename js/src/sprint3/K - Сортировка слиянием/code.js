/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 */
function merge_sort(arr, left, right) {
    if (left + 1 >= right) return;

    if (left + 2 === right) {
        const merged = merge(arr, left, right, right);
        arr[left] = merged[0];
        arr[right] = merged[1];
        return;
    }

    const mid = left + Math.floor((right - left) / 2);

    merge_sort(arr, left, mid);
    merge_sort(arr, mid, right);
}

/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} mid
 * @param {number} right
 * @returns {number[]}
 */
function merge(arr, left, mid, right) {
    const res = [];
    let l = left;
    let r = mid;

    while (true) {
        if (l >= mid && r >= right) break;

        if (arr[l] <= arr[r] && l < mid) {
            res.push(arr[l]);
            l++;
        } else if (r < right) {
            res.push(arr[r]);
            r++;
        }
    }

    return res;
}

function test() {
    var a = [1, 4, 9, 2, 10, 11];
    var b = merge(a, 0, 3, 6);
    var expected = [1, 2, 4, 9, 10, 11];

    var c = [1, 4, 2, 10, 1, 2];
    merge_sort(c, 0, 6);
    expected = [1, 1, 2, 2, 4, 10];
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = {
    merge,
    merge_sort,
};
