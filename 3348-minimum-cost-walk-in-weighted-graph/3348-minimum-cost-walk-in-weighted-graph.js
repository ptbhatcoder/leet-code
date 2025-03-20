const MAX_IN_BINARY = Number(10**5).toString(2);
const MASK = parseInt(MAX_IN_BINARY.replaceAll('0','1'), 2);

class DSU {
    constructor(size){
        this.parent = Array.from({ length:size }, (_, i) => i);
        this.rank = new Array(size).fill(1);
        this.weight = new Array(size).fill(MASK);
    }

    find(node){
        if(this.parent[node] !== node){
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(x, y, w){
        const px = this.find(x);
        const py = this.find(y);

        let lead = px;
        if(this.rank[px] < this.rank[py]){
            this.parent[px] = py;
            lead = py;
        } else {
            this.parent[py] = px;
            lead = px;
        }
        if(this.rank[px] === this.rank[py]) this.rank[lead]++;
        this.weight[px] = this.weight[py] = this.weight[px] & this.weight[py]  & w;
    }

    cost(s, e){
        if(s === e) return 0;
        const ps = this.find(s);
        const pe = this.find(e);
        if(ps !== pe) return -1;
        return this.weight[ps];
    }
}


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
    const dsu = new DSU(n);
    for(const [u, v, w] of edges){
        dsu.union(u, v, w);
    }

    return query.map(([s, e]) => dsu.cost(s, e));
};