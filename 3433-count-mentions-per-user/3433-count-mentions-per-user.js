/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function(n, events) {
    events.sort(([l1, t1], [l2, t2]) => (+t1 - +t2) || (l1 === 'OFFLINE' ? -1 : 1));
    const mentions = new Array(n).fill(0);
    const back = new Array(n).fill(0);
    const getTargets = ([event, ts, mentionsStr]) => {
        if(mentionsStr === 'ALL'){
            return Array.from({ length: n }, (_, i) => i);
        } 
        
        if(mentionsStr === 'HERE'){
            const timestamp = +ts;
            const targets = [];
            for(let target = 0; target < n; target++){
                if(back[target] <= timestamp) targets.push(target);
            }
            return targets;
        }  
        
        return mentionsStr.split(' ').map(id => event === 'OFFLINE' ? +id : +id.slice(2));
    }
    for(const event of events){  
        const targets = getTargets(event);  
        const online = +event[1] + 60;
        for(const target of targets){
            if(event[0] === 'OFFLINE') back[target] = online;
            else mentions[target]++;
        }
    }
    return mentions;
};