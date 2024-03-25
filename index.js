// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
/* const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
      {
        name: 'Sammy',
        hometown: 'New York' } ,
      {
        name: 'Sally',
        hometown: 'Cleveland' },
      {
        name: 'Annette',
        hometown: 'Los Angeles' },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay' }
    ]; */

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase()); // by converting both the driver's name and the search term to lowercase, the comparison is made case insensitive. This ensures that the search matches regardless of whether the letters are in uppercase or lowercase.
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.startsWith(letter)); // startsWith is used to find strings that start with ...
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver['name'] === name);
}