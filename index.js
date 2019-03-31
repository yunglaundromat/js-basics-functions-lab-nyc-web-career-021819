function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else if (block < 42) {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) {
    return ((block1 - block2) * 264)
  } else if (block2 > block1) {
    return ((block2 - block1) * 264)
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0
  } else if (distance <2000) {
    return (distance - 400) * 0.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
// Code your solution in this file!
