// Code your solution in this file!
const block = 42;
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - block);
}

function distanceFromHqInFeet(feet) {
    return (distanceFromHqInBlocks(feet)*264);
}
function distanceTravelledInFeet(num1, num2) {
    let blocks;
    blocks = (num2 - num1) * 264;
    return Math.abs(blocks);
}

function calculatesFarePrice(num1, num2) {
    if (num2 - num1 <= 400) 
    return 0; 
    else if (num2);
    return (num2 * 0.02);
    }

