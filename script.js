/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 


var massJohn = 70;
var heightJohn = 1.70;

var massMatt = 80;
var heightMatt = 1.80;

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiMatt = massMatt / (heightMatt * heightMatt);
console.log(bmiMatt);

var bmiWinner = 


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefuly marry soon!');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will marry soon!');
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 192;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark bmi is higher than John');
} else {
    console.log('John bmi is higher than Mark');
}

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man')
}else {
    console.log(firstName + ' is a man');
}

var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    console.log(firstName + ' drinks beer');
} else {
    console.log(firstName + ' drinks juice');
}

if(age >= 18) {
    var drink = 'beer';
} else {
    var drink = "juice";
}

var job = 'instructor';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' is a teacher');
        break;
    case 'driver':
        console.log(firstName + ' is a driver');
        break;
    case 'designer':
        console.log(firstName + ' is a designer');
        break;
    default:
        console.log(firstName + ' does something else');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}

var height;

height = 23;

if(height || height === 0) {
    console.log('variable defined');
} else {
    console.log('variable not defined');
}

//Equality operators
if(height === '23') {
    console.log('the == operator does type coercion!');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var scoreJohn = 89 + 120 + 103;
var scoreMike = 116 + 94 + 123;

var avgJohn = scoreJohn /3;
var avgMike = scoreMike /3;


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will marry soon');
}

var isMarried = true;
if (isMarried === true) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will marry soon');
}


var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else if(age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is  man');
}

var firstName = 'John';
var age = 16;

//ternary operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//switch statement

var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designs websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

age = 56;
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy');
    break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
    break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
    break;
    default:
        console.log(firstName + ' is  man');
}

var scoreJohn = 89 + 120 + 103;
var scoreMike = 116 + 94 + 123;
var scoreMary = 97 + 134 + 105;

var avgJohn = scoreJohn  / 3;
var avgMike = scoreMike / 3;
var avgMary = scoreMary / 3;

switch(true) {
    case avgJohn > avgMike:
        console.log('John wins ' + avgJohn);
    break;
    case avgJohn < avgMike:
        console.log('Mike wins ' + avgMike);
    break;
    default:
        console.log('It is a tie');
}


if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John wins');
} else if(avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike wins');
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary wins');
} else {
    console.log('It is a tie');
}

switch(true) {
    case avgJohn > avgMike && avgJohn > avgMary:
        console.log('John wins');
    break;
    case avgMike > avgJohn && avgMike > avgMary:
        console.log('Mike wins');
    break;
    case avgMary > avgJohn && avgMary > avgMike:
        console.log('Mary wins');
    break;
    default:
        console.log('It is a tie');
}

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

//function whatDoYouDo(job, firstName); {}

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher' :
            return firstName + ' teaches.';
        case 'driver' :
            return firstName + ' drives.';
        case 'designer' :
            return firstName + ' designs.';
        default :
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Chris'));
console.log(whatDoYouDo('writer', 'Jack'));

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);


var tip = function(bill) {
    if(bill <= 49) {
        return(bill * 0.2);
    } else if (bill >= 201) {
        return(bill * 0.1);
    } else {
        return(bill * 0.15);
    }
}

console.log(tip(124));
console.log(tip(48));
console.log(tip(268));

var allTips = [tip(124), tip(48), tip(268)];
console.log(allTips);

var total = [124 + allTips[0], 48 + allTips[1], 268 + allTips[2]];
console.log(total);


function tipCalculator(bill) {
    var percentage;
    if(bill < 50) {
        percentage = .2;
    } else if(bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
    percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2]),];

var finalValues = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];
            
console.log(tips, finalValues);


// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// ne Object syntax
var jane = new Object();
jane.lastName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

// Objects and methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2018 - birthYear;
    }
};

console.log(john.calcAge(1990));


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2018 - this.birthYear;
    }
};

console.log(john.calcAge());


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2018 - this.birthYear;
    }
};

john.age = john.calcAge();
console.log(john);


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);


//////////////////////////////////////////////////////////////////////////////////////////
var john = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.70,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Zucks',
    mass: 80,
    height: 1.80,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.bmiCalc();
mark.bmiCalc();
console.log(john, mark);

switch(true) {
    case john.bmi > mark.bmi:
        console.log(john.fullName + ' bmi is ' + john.bmi);
    break;
    case mark.bmi > mark.bmi:
        console.log(mark.fullName + 'bmi is ' + mark.bmi);
    break;
    default:
        console.log(john.fullName + ' and ' + mark.fullName + ' have the same bmi');
};

//////////////////////////////////////////////////////////////////////////////////////////


var john = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.70,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Zucks',
    mass: 80,
    height: 1.80,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


switch(true) {
    case john.bmiCalc() > mark.bmiCalc():
        console.log(john.fullName + ' bmi is ' + john.bmi);
    break;
    case mark.bmi > john.bmi:
        console.log(mark.fullName + ' bmi is ' + mark.bmi);
    break;
    default:
        console.log(john.fullName + ' and ' + mark.fullName + ' have the same bmi');
};


for (var i = 0; i < 10; i++) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
///...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}
*/

//LOOPS

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john,length) {
    console.log(john[i]);
    i++;
}