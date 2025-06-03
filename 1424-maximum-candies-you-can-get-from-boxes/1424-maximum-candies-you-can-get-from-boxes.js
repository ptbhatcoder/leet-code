/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
const maxCandies = (status, candies, keys, containedBoxes, initialBoxes) => {
    let q = [...initialBoxes];
    let total = 0;

    while (q.length > 0) {
        const next = [];
        for(let i = 0; i < q.length; i++){
            const box = q[i];;
            if(!status[box]){
                if((i + 1) >= q.length) return total;
                next.push(box);
            } else {
                total += candies[box];
                for(const key of keys[box]) status[key] = 1;
                next.push(...containedBoxes[box]);
            }
        } 
        q = next;
    }

    return total;
};