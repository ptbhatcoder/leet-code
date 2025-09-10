/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    const students = new Set;
    const know = languages.map(l => new Set(l));
    for(const [p1, p2] of friendships){
        const u = p1 - 1, v = p2 - 1;
        let canTalk = false;
        for(let l = 1; l <= n && !canTalk; l++){
            if(know[u].has(l) && know[v].has(l)) canTalk = true;
        }
        if(!canTalk){
            students.add(u);
            students.add(v);
        }
    }
    const speakers = new Array(1 + n).fill(0);
    let max = 0;
    for(const student of students){
        for(const lang of know[student]){
            max = Math.max(max, ++speakers[lang]);
        }
    }
    return Math.max(students.size - max, 0);
};