'use strict';

function findMedian (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  const arr = [...arr1,...arr2].sort();

  if (arr.some(n => Number.isNaN(+n))) return false;
  if (arr.length % 2 !== 0) return false;

  return (arr[Math.floor((arr.length-1)/2)] + arr[Math.ceil((arr.length-1)/2)]) / 2.0
}
exports.findMedian = findMedian;
