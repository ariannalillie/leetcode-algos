const wateringPlants = (plants, capacity) => {

}

const plants = [2,2,3,3]
const capacity = 5
console.log(wateringPlants(plants, capacity)) // Output: 14
// Explanation: Start at the river with a full watering can:
// - Walk to plant 0 (1 step) and water it. Watering can has 3 units of water.
// - Walk to plant 1 (1 step) and water it. Watering can has 1 unit of water.
// - Since you cannot completely water plant 2, walk back to the river to refill (2 steps).
// - Walk to plant 2 (3 steps) and water it. Watering can has 2 units of water.
// - Since you cannot completely water plant 3, walk back to the river to refill (3 steps).
// - Walk to plant 3 (4 steps) and water it.
// Steps needed = 1 + 1 + 2 + 3 + 3 + 4 = 14.