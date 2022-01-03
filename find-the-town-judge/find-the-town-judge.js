/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => {
    if(N === 1){
        return trust.length === 0 ? 1 : -1;
    }
    
    let judge, maxJudgeCount = 0;
    
    const [nTrustees, trusters] = trust.reduce(([nTrustees, trusters], [cand, trusted]) => {
        
        // fill the trusted map
        const curCount = nTrustees.get(trusted) || 0;
        nTrustees.set(trusted, curCount+1);
        
        if(curCount + 1 > maxJudgeCount){
            maxJudgeCount = curCount+1;
            judge = trusted;
        }
        
        // fill the trust map
        trusters.add(cand);
        
        return [nTrustees, trusters];
    }, [new Map(), new Set()]);
    
    return trusters.has(judge) ? -1 : maxJudgeCount === N-1 ? judge : -1
    
} 