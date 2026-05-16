const { fetchDepots, fetchVehicles } = require("./apiService");
const knapsack = require("../utils/knapsack");
const Log = require("../../logging_middleware/logger");

const computeSchedule = async () => {
    const depots = await fetchDepots();
    const vehicles = await fetchVehicles();

    const results = [];

    for (const depot of depots) {
        const maxHours = depot.MechanicHours;

        const solution = knapsack(vehicles, maxHours);

        results.push({
            depotId: depot.ID,
            maxHours,
            maxImpact: solution.maxImpact,
            tasks: solution.selectedTasks
        });

        await Log("backend", "info", "service", `Depot ${depot.ID} scheduled`);
    }

    return results;
};

module.exports = { computeSchedule };
