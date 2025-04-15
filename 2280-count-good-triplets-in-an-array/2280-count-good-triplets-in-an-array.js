/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function goodTriplets(nums1, nums2) {
  const elemToIndexMappingInB = new Map();
  const n = nums1.length;
  const segmentTree = new Array(n * 4 + 1).fill(0);
  let ans = 0;
  for (let i = 0; i < nums2.length; i++) {
    elemToIndexMappingInB.set(nums2[i], i);
  }
  update(segmentTree, 1, 0, n - 1, elemToIndexMappingInB.get(nums1[0]));
  for (let i = 1; i < n; i++) {
    const indexInB = elemToIndexMappingInB.get(nums1[i]);
    const commonElementsOnLeft = query(segmentTree, 1, 0, n - 1, 0, indexInB);
    const uniqueElementsOnLeftInA = i - commonElementsOnLeft;
    const elementsAfterIndexInB = n - 1 - indexInB;
    const commonElementsOnRight = elementsAfterIndexInB - uniqueElementsOnLeftInA;
    ans += commonElementsOnLeft * commonElementsOnRight;
    update(segmentTree, 1, 0, n - 1, indexInB);
  }
  return ans;
}

function update(st, index, start, end, updateIndex) {
  if (start == end) {
    st[index] += 1;
    return;
  }
  const mid = start + Math.floor((end - start) / 2);
  if (updateIndex <= mid) update(st, index * 2, start, mid, updateIndex);
  else update(st, index * 2 + 1, mid + 1, end, updateIndex);
  st[index] = st[index * 2] + st[index * 2 + 1];
}

function query(st, index, start, end, queryStart, queryEnd) {
  if (end < queryStart || start > queryEnd) return 0;
  if (start >= queryStart && end <= queryEnd) return st[index];
  const mid = start + Math.floor((end - start) / 2);
  const left = query(st, index * 2, start, mid, queryStart, queryEnd);
  const right = query(st, index * 2 + 1, mid + 1, end, queryStart, queryEnd);
  return left + right;
}