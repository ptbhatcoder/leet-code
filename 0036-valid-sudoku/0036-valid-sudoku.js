/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) { 
    let nums;
    for(let r = 0; r < 9; r++) {
        nums = new Set([1,2,3,4,5,6,7,8,9].map(String));
        for(let c = 0; c < 9; c++){
            if(board[r][c] === '.') continue;
            if(!nums.has(board[r][c])) return false;
            nums.delete(board[r][c]);
        }
    }

   

    for(let c = 0; c < 9; c++) {
        nums = new Set([1,2,3,4,5,6,7,8,9].map(String));
        for(let r = 0; r < 9; r++){
            if(board[r][c] === '.') continue;
            if(!nums.has(board[r][c])) return false;
            nums.delete(board[r][c]);
        }
    }

   

    for(let box = 0; box < 9; box++) {
        const rOffset = Math.floor(box / 3) * 3;
        const cOffset = (box % 3) * 3;
        nums = new Set([1,2,3,4,5,6,7,8,9].map(String));
        for(let cell = 0; cell < 9; cell++){
            const r = rOffset + Math.floor(cell / 3);
            const c = cOffset + (cell % 3);
            if(board[r][c] === '.') continue;
            if(!nums.has(board[r][c])) return false;
            nums.delete(board[r][c]);
        }
    }

    return true;
};