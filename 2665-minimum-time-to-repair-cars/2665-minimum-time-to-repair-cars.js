var repairCars = function(ranks, cars) {
    let left = 1, right = Math.min(...ranks) * cars * cars;

    const canRepairAll = (time) => {
        let totalCarsRepaired = 0;
        for (let rank of ranks) {
            totalCarsRepaired += Math.floor(Math.sqrt(time / rank));
            if (totalCarsRepaired >= cars) return true;
        }
        return false;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canRepairAll(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};