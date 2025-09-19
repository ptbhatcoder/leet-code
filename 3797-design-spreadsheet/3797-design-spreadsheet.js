/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.sheet = Array.from({ length: 1 + rows }, _ => new Array(26).fill(0));
};

const getCell = cell => {
    const c = cell.charCodeAt(0) - 65;
    const r = +cell.slice(1);
    return [r, c];
}

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    const [r, c] = getCell(cell);
    this.sheet[r][c] = value;
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.setCell(cell, 0);
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    const operands = formula.slice(1).split('+').map(op => {
        if(/[A-Z]/.test(op[0])) {
            const [r, c] = getCell(op);
            return this.sheet[r][c] || 0;
        }
        return +op;
    });
    return operands.reduce((a, c) => a + c, 0);
};

/** 
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */