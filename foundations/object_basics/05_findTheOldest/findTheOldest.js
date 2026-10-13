const findTheOldest = function(people) {
  if (!Array.isArray(people) || people.length === 0) {
    throw new Error('people must be a non-empty array');
  }

  return people.reduce((oldest, person) => {
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = person.yearOfDeath - person.yearOfBirth;

    // In case of a tie, return the first one encountered.
    return personAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
