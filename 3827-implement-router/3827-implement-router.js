/**
 * @param {number} memoryLimit
 */
var Router = function(memoryLimit) {
    this.size = memoryLimit;
    this.packets = new Map(); // key -> [source, destination, timestamp]
    this.counts = new Map();  // destination -> array of timestamps
    this.queue = []; // FIFO order of keys
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype._encode = function(source, destination, timestamp) {
    // Combine into one unique number (using BigInt to avoid overflow)
    return (BigInt(source) << 40n) | (BigInt(destination) << 20n) | BigInt(timestamp);
};

/** 
 * @param {number} source 
 * @param {number} destination 
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function(source, destination, timestamp) {
    const key = this._encode(source, destination, timestamp).toString();

    // Duplicate check
    if (this.packets.has(key)) return false;

    // If memory is full, forward oldest
    if (this.packets.size >= this.size) {
        this.forwardPacket();
    }

    // Add packet
    this.packets.set(key, [source, destination, timestamp]);
    this.queue.push(key);

    if (!this.counts.has(destination)) {
        this.counts.set(destination, []);
    }
    this.counts.get(destination).push(timestamp);

    return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function() {
    if (this.packets.size === 0) return [];

    const key = this.queue.shift();
    const packet = this.packets.get(key);
    this.packets.delete(key);

    const destination = packet[1];
    this.counts.get(destination).shift(); // remove earliest timestamp

    return packet;
};

/** 
 * @param {number} destination 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function(destination, startTime, endTime) {
        if (!this.counts.has(destination)) return 0;

        const timestamps = this.counts.get(destination);
        if (timestamps.length === 0) return 0;

        // Binary search helpers
        const lowerBound = (arr, target) => {
            let low = 0, high = arr.length;
            while (low < high) {
                const mid = Math.floor((low + high) / 2);
                if (arr[mid] < target) low = mid + 1;
                else high = mid;
            }
            return low;
        };

        const upperBound = (arr, target) => {
            let low = 0, high = arr.length;
            while (low < high) {
                const mid = Math.floor((low + high) / 2);
                if (arr[mid] <= target) low = mid + 1;
                else high = mid;
            }
            return low;
        };

        const left = lowerBound(timestamps, startTime);
        const right = upperBound(timestamps, endTime);

        return right - left;    
};

/** 
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */