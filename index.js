// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
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
  ];


function findMatching(drivers, name){
    const matchedDrivers = drivers.filter(person => person.toLowerCase() === name.toLowerCase());

    return matchedDrivers;
}

function fuzzyMatch(drivers, name){
    const matchedDrivers = drivers.filter(person => person.charAt(0) === name.charAt(0));

    return matchedDrivers;
}

function matchName(drivers, word){
    return drivers.filter(person => person.name === word)
}