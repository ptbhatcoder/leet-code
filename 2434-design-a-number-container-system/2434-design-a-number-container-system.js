

const floor = (val, arr) => {
    let l = 0, r = arr.length - 1, pos = -1;
    while(l <= r){
        const mid = l + Math.floor((r - l) / 2);
        if(val >= arr[mid]){
            pos = mid;
            l = mid + 1;
        } else r = mid - 1;
    }
    return pos;
}

const insert = (arr, val) => {
    arr.splice(floor(val, arr) + 1, 0, val);
    return arr;
}

const del = (arr, val) => {
    const pos = floor(val, arr);
    if(pos !== -1){
        arr.splice(pos, 1);
    }
    return arr;
}

var NumberContainers = function() {
    this.numberPositions = {};
    this.valAtPos = {};
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if(index in this.valAtPos){
        const val = this.valAtPos[index];
        const positions = this.numberPositions[val];
        const res = del(positions, index);
        if(!res.length) delete this.numberPositions[val];
        else this.numberPositions[val] = res;
    }
    this.valAtPos[index] = number;
    if(!this.numberPositions[number]) this.numberPositions[number] = [];
    this.numberPositions[number] = insert(this.numberPositions[number], index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    const arr = this.numberPositions[number];
    if(!arr?.length) return -1;
    return arr[0];
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */