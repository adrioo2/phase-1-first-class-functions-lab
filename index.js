// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(0,2) 
}
const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(-2) 
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier (fare) {
    return function(multiplier){
      return multiplier * fare
    }
  }
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers, one){
  return one(drivers)
}