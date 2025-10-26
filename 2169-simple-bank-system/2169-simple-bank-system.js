/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.balance =  balance;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(src, destn, money) {
    if(this.withdraw(src, money)){
        if(this.deposit(destn, money)) return true;
        this.deposit(src, money);
        return false;
    }
    return false;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    const n = this.balance.length;
    if(account > n || account < 1) return false;
    this.balance[account - 1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    const n = this.balance.length;
    if(account > n || account < 1) return false;
    if(this.balance[account - 1] < money) return false;
    this.balance[account - 1] -= money;
    return true;
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */