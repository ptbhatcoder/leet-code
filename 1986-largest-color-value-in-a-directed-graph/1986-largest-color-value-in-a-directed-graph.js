/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    let graph = new Map();
    let indegree = new Array(colors.length).fill(0);
    let colorMap = new Map();

    for(let [src,des] of edges){
        if(!graph.has(src)) graph.set(src,[des]);
        else graph.get(src).push(des);
        indegree[des]++;
    }
    let q = [];
    for(let i=0;i<colors.length;i++){
        if(indegree[i]===0) q.push(i);
    }
    let counter = 0;
    let largestColor = 0;
    const colorCount = Array.from({ length: colors.length }, () => new Array(26).fill(0));

    while(q.length>0){
        let node = q.shift();
        let neis = graph.get(node) || [];
        let colorIdx = colors.charCodeAt(node) - 97; 
        colorCount[node][colorIdx]++;
        largestColor = Math.max(largestColor, colorCount[node][colorIdx]);
        counter++;
        for(let nei of neis){
            for (let c = 0; c < 26; c++) {
                colorCount[nei][c] = Math.max(colorCount[nei][c], colorCount[node][c]);
            }
            indegree[nei]--;
            if(indegree[nei]===0) q.push(nei);
        }
    }


    return counter === colors.length ? largestColor : -1;
};