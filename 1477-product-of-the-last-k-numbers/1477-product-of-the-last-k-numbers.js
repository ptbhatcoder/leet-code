
var ProductOfNumbers = function() {
    this.prods = [1]
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num === 0) {
        this.prods = [1];
        return;
    }
    this.prods.push(num * this.prods.at(-1));
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(k >= this.prods.length) return 0;

    return this.prods.at(-1) / this.prods.at(-k-1);
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */