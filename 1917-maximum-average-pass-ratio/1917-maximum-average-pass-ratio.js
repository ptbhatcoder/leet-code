/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    const pq = new MaxPriorityQueue(i => {
        const [p, t] = classes[i];
        return (p+1)/(t+1) - p / t;
    });
    const n = classes.length;
    for(let i = 0; i < n; i++) pq.enqueue(i);
    for(let extra = 0; extra < extraStudents; extra++){
        const i = pq.dequeue();
        classes[i][0]++;
        classes[i][1]++;
        pq.enqueue(i);
    }
    let avSum = 0;
    for(let i = 0; i < n; i++){
        const grade = classes[i];
        const avg = grade[0] / grade[1];
        avSum += avg;
    }
    return avSum / n;
};