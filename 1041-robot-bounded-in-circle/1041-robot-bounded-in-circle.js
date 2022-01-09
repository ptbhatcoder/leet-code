/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const dirs = ['N', 'E', 'S', 'W'];
    let curX = 0, curY = 0;
    let curDir = 0;
    
    for(let cmd of instructions){
        switch(cmd){
            case 'L':
                curDir = (curDir + 3) % 4;
                break;
            case 'R':
                curDir = (curDir + 1) % 4;
                break;
            case 'G':
                switch(dirs[curDir]){
                    case 'N':
                        curY++;
                        break;
                    case 'E':
                        curX++;
                        break;
                    case 'S':
                        curY--;
                        break;
                    case 'W':
                        curX--;
                        break;
                        
                }
                break;
        }
    }
    
    return dirs[curDir] !== 'N' || (curX === 0 && curY === 0);
};