/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = (fruits, baskets) => {
    if (!fruits || !baskets) return -1;
    const size = fruits.length;
    if (size !== baskets.length) return -2;

    const tree = new Array(4 * size).fill(0);
    buildTree(tree, baskets, 0, 0, size - 1);

    let count = 0;
    for (const fruit of fruits) {
        if (!placeFruit(tree, 0, 0, size - 1, fruit)) count++;
    }
    return count;
};

const buildTree = (tree, baskets, i, low, high) => {
    if (low === high) {
        tree[i] = baskets[low];
        return;
    }

    const mid = (low + high) >> 1;
    const left = 2 * i + 1;
    const right = left + 1;

    buildTree(tree, baskets, left, low, mid);
    buildTree(tree, baskets, right, mid + 1, high);

    tree[i] = Math.max(tree[left], tree[right]);
};

const placeFruit = (tree, i, low, high, value) => {
    if (tree[i] < value) return false;

    if (low === high) {
        tree[i] = 0;
        return true;
    }

    const mid = (low + high) >> 1;
    const left = (i << 1) + 1;
    const right = left + 1;

    let found;
    if (tree[left] >= value) {
        found = placeFruit(tree, left, low, mid, value);
    } else {
        found = placeFruit(tree, right, mid + 1, high, value);
    }

    tree[i] = Math.max(tree[left], tree[right]);
    return found;
};