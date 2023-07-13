// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  if (pickupLocation >= 42) {
    return pickupLocation - 42;
  } else {
    return 42 - pickupLocation;
  }
}
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const blocksTravelled = (start > destination) ? start - destination : destination - start;
    return blocksTravelled * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = (start > destination) ? (start - destination) * feetPerBlock : (destination - start) * feetPerBlock;
  
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      const fare = (distance - 400) * 0.02; 
      return fare;
    } else if (distance > 2000 && distance < 2500) {
      return 25; 
    } else if (distance >= 2500) {
      return 'cannot travel that far'; 
    }
  }
  
  