
const solveBoard = (board, n, empty) => {
    const size = n * n;
    const canPlace = (row, column, val) => {
        if(row < 0 || row >= size) return false;
        if(column < 0 || column >= size) return false;
        if(board[row][column] !== empty) return false;
        
        const check = ''+val;
        const xBase = (~~(row/n)) * n;
        const yBase =( ~~(column/n)) * n;
        for(let i = 0; i < size; i++){
            if(board[i][column] === check) return false;
            if(board[row][i] === check) return false;
            
            const xOffset = ~~(i / n);
            const yOffset = ~~(i % n);
            if(board[xBase + xOffset][yBase + yOffset] === check) return false;
        }
        return true;
    }
    
    const solve = (i, j) => {
       
        if(i === size && j === 0) return true;
        const nextI = j === size ? i+1 : i;
        const nextJ = j === size ? 0 : j+1;
        
        if(board[i][j] !== empty) return solve(nextI, nextJ);
        for(let num = 1; num <= size; num++){
            if(!canPlace(i, j, num)) continue;
            board[i][j] = ''+num;
            if(solve(nextI,nextJ)) return true;
            board[i][j] = empty;
        }
        return false;
    }
    
    solve(0,0);
}


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solveBoard(board, 3, '.');
};