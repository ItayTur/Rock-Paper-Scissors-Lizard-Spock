// Weapons array
const weapons = [
    'rock',
    'paper',
    'scissors',
    'spock',
    'lizard'
];

// Gets random weapon from the weapons array
export const getRandomWeapon = () => {
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
};

// Construct key for the weapons comparison dictionary
const getComparisonKey = (weapon1, weapon2) => `${weapon1} win ${weapon2}`;

// Comparisons dictionary pointing the result for each weapons battle
const comparisonDictionary = {
    // rock
    [getComparisonKey('rock', 'paper')]: false,
    [getComparisonKey('rock', 'scissors')]: true,
    [getComparisonKey('rock', 'lizard')]: true,
    [getComparisonKey('rock', 'spock')]: false,

    // paper
    [getComparisonKey('paper', 'rock')]: true,
    [getComparisonKey('paper', 'scissors')]: false,
    [getComparisonKey('paper', 'lizard')]: false,
    [getComparisonKey('paper', 'spock')]: true,

    // scissors
    [getComparisonKey('scissors', 'rock')]: false,
    [getComparisonKey('scissors', 'paper')]: true,
    [getComparisonKey('scissors', 'lizard')]: true,
    [getComparisonKey('scissors', 'spock')]: false,

    // spock
    [getComparisonKey('spock', 'scissors')]: true,
    [getComparisonKey('spock', 'paper')]: false,
    [getComparisonKey('spock', 'rock')]: true,
    [getComparisonKey('spock', 'lizard')]: false,

    // lizard
    [getComparisonKey('lizard', 'scissors')]: false,
    [getComparisonKey('lizard', 'paper')]: true,
    [getComparisonKey('lizard', 'rock')]: false,
    [getComparisonKey('lizard', 'spock')]: true,

};

// Compare two weapons and return true if weapon1 win, else return false
export const compare = (weapon1, weapon2) => {
    const comparisonKey = getComparisonKey(weapon1, weapon2);
    return comparisonDictionary[comparisonKey];
}