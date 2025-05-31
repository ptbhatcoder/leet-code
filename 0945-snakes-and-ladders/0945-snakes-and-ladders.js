/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let q = [1];
    const n = board.length;
    const last = n * n;
    const dist = new Array(last + 1).fill(-1);
    dist[1] = 0;
    const getCell = num => {
        const val = num - 1;
        const pos = Math.floor(val / n);
        const row = (n - 1) - pos;
        const offset = val % n;
        const col = pos & 1 ? (n - 1) - offset : offset;
        return board[row][col]; 
    }
    while(q.length > 0){
        const next = [];
        for(const cell of q){
            const upto = Math.min(last, cell + 6);
            for(let to = cell + 1; to <= upto; to++){
                const val = getCell(to);
                const actual = val > -1 ? val : to;
                if(dist[actual] === -1){
                    dist[actual] = dist[cell] + 1;
                    next.push(actual);
                }
            }
        }
        q = next;
    }
    return dist[last];
};