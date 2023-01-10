const careers = ['teacher','doctors','engineer','nuser','scientist'];

const nurseIncluded = careers.includes('nurse')
console.log(nurseIncluded);

//some or every

//some element has to match the createria

//every each element has to match the createria


const states = [
    "califonia",
    "New York",
    "Alaska",
    "New Mexico",
    "Montana"
];

const someState = states.some((state)=> state.startsWith("New"));

const everState = state.every((state)=> state.startsWith("New"));

// Challegue 2

//include,some,and every 

const bowlingScore = [150,204,300,184,286]

//challegue question 1
// does the array of bowling scores include a 300?

const bowlthreehundred = bowlingScore.includes(300);

// are some of the scores under 150

const less = bowlingScore.some((lessthan) => lessthan < 150)

//is every score an even number

const even = bowlingScore.every((evenNumber)=> evenNumber % 2 === 0);