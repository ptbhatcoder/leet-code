/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((m1, m2) => (m1[0] - m2[0]) || (m1[1] - m2[1]));
    let last = -1;
    for(const meeting of meetings){
        if(last >= 0 && meeting[0] <= meetings[last][1]){
            meetings[last][1] = Math.max(meeting[1], meetings[last][1]);
        } else {
            last++;
            meetings[last] = meeting;
        }
    }

    let res = Math.max(days - meetings[last][1], 0);
    while(last >= 0){
        const start = meetings[last][0];
        if(meetings[last][0] > days){
            last--;
            continue;
        }
        if(last === 0){
            res += (start - 1);
        } else {
            res += (Math.min(1 + days, start) - 1 - meetings[last-1][1]);
        }

        last--;
    }
    return res;
};