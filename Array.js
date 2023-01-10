

const pets = ['dog','cat','rabbit','hamster']

const petsLenght = pets.length;
console.log(petsLength);


pets[2] = 'snake';

// for each

const score = [50,60,70,80,90,100]

const logScore = (score) => console.log('score over 65', score)

score.forEach((element)=> {
    if(element>65){
        logScore(element);
        console.log('score is Higher')
    } else {
        console.log('scrore is lower than 65')
    }
})


// Sorting values 
//Value lower to higer

const grades = [88,94,72,84,53,77];
// to get the lower to higer
grades.sort ((a,b)=> b-a);
console.log(grades);
//to get the higer to lowest
grades.sort((a,b)=> a - b)

console.log(grades)

//reverse an array
employer = ['sara','john','tnny']

console.log(employer.reverse())

const reserverd = [...employer]
console.log('reserve',reserverd.reverse())
// filter array to return an element
const grads = [99,83,87,91,77];

const underElement = grads.find((element)=> element < 80)

//Challegue question 1
//Sort the array of student based on their grade
//in descending order

const Students = [
    {name:'john',grade:75},
    {name:'jane',grade:93},
    {name:'Samantha',grade:90},
    {name:'Michel',grade:94},
]

Students.sort(( a, b) => b.grade - a.grade);
console.log(Students)

// Challegue 2 
// After sorting the array,reverse the order of the array

console.log(Students.reverse());

//Challegue 3 
//find a student in the array who has a grade over 90

const str = Students.find((element)=> element.grade > 90)
console.log(str);