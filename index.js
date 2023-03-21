// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  

const drivers = ['Bob', 'Alice', 'Charlie', 'Dave'];
const firstTwoDrivers = selectingDrivers[0](drivers);
const lastTwoDrivers = selectingDrivers[1](drivers);

console.log(firstTwoDrivers);
console.log(lastTwoDrivers); 

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}


const fareDoubler = createFareMultiplier(2);
const fare = 10;

const doubledFare = fareDoubler(fare);

console.log(`Fare: ${fare}`);
console.log(`Doubled Fare: ${doubledFare}`);


function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareTripler = createFareMultiplier(3);
const fare1 = 10;

const tripledFare = fareTripler(fare);

console.log(`Fare: ${fare}`);
console.log(`Tripled Fare: ${tripledFare}`);


function selectDifferentDrivers(drivers, selection) {
  return selection(drivers);
}

function returnFirstTwoDrivers1(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers1(drivers) {
  return drivers.slice(-2);
}

const firstTwoDrivers1 = selectDifferentDrivers(drivers, returnFirstTwoDrivers1);
const lastTwoDrivers1 = selectDifferentDrivers(drivers, returnLastTwoDrivers1);

console.log(`First Two Drivers: ${firstTwoDrivers}`);
console.log(`Last Two Drivers: ${lastTwoDrivers}`);