/*'use strict';

let hasDriverLicense = false;
const passTest = true;

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    
    const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
};

console.log(fruitProcessor(2,3));

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);        
        return retirement;
    } else {
        console.log(`${firstName} has already retires.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

const friends = ['Mike', 'Steve', 'Pete'];
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

console.log(y[0]);

const firstName = 'jonas';
const jonas = [firstName, 'Tran', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLength = friends.push('Jay')
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements

friends.pop(); //remove last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Steven')) {
    console.log('Steven is your friend');
} else {
    console.log('Not a friend')
}

const jonas = {
    firstName: 'Jonas',
    lastName: 'Doe',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Mike', 'Peter', 'Steve']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know?');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request. what do you want to know?');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@something';
console.log(jonas);

//Challenge
console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Mike', 'Peter', 'Steve'],
    hasDriverLicense: true,

    //calcAge: function(birthYear) {
    //    return 2037 - birthYear;
    //}

    //calcAge: function() {
        //console.log(this);
    //    return 2037 - this.birthYear;
    //}
    
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    /*getSummary: function() {
        if(this.hasDriverLicense == true) {
            console.log(`${this.firstName} is a ${this.age}- year old teacher, and he has a driver license.`)
        } else {
            console.log(`${this.firstName} is a ${this.age}- year old teacher, and he has not a driver license.`)
        }
    }*/

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//console.log(jonas['calcAge'](jonas.birthYear));

console.log(jonas.getSummary());