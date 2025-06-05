const CHARS = [...'abcdefghijklmnopqrstuvwxyz'];
class DSU {
    constructor(){
        this.pars = new Map(CHARS.map(c => [c, c]));
    }

    find(c){
        const par = this.pars.get(c);
        if(par !== c){
            this.pars.set(c, this.find(par));
        }
        return this.pars.get(c);
    }

    union(a, b){
        const pa = this.find(a);
        const pb = this.find(b);
        if(pa === pb) return pa;
        if(pa < pb){
            this.pars.set(pb, pa);
            return pa;
        }
        this.pars.set(pa, pb);
        return pb;
    }
}
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const n = s1.length;
    const dsu = new DSU();
    for(let i = 0; i < n; i++){
        dsu.union(s1[i], s2[i]);
    }

    return [...baseStr].map(c => dsu.find(c)).join('');
};