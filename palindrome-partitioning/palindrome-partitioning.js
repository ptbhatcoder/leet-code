/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const p = [];
    for(let i = 0; i < s.length; i++){
        const q = [];
        for(let j = 0;j < s.length; j++){
            q.push(false);
        }
        p.push(q);
    }
    
    for(let i = 0; i < s.length; i++){
        p[i][i] = true;
    }
    
    for(let i = 0; i < s.length - 1; i++){
        p[i][i+1] = s[i] === s[i+1];
    }
    
    for(let l = 3; l <= s.length; l++){
        for(let i = 0; i < s.length - l + 1; i++){
            const j = i + l - 1;
            p[i][j] = p[i+1][j-1] && (s[i] === s[j]); 
        }
    }
    
    const result = [];
    const dfs = (start, path) => {
        if(start === s.length){
            result.push(path.map(([start, end]) => s.slice(start, end+1)));
            return;
        }
        
        for(let i = start; i < s.length; i++){
            if(!p[start][i]) continue;
            path.push([start, i]);
            dfs(i + 1, path);
            path.pop();
        }
    }

    dfs(0, []);
    return result;
};