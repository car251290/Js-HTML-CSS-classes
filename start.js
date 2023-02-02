//Forloop
(function () {
    "use strict"
    var band = [
        "Renee Rosness",
        "ANAT Cohen",
        "Melissa Aldana",
        "Ingrid Jensen",
        "Noriko Ueda",
        "Allison Miller",
        "Cecile McLorin Salvant"
        ];

        for(var memeber of band){
            //Nice!
        }
        //for each 
        band.forEach(function(memeber){
            console.log("Introduction", memeber);

        });

        //every has to return true for make the interesation in the foorloop

        band.every(function(memeber){
            console.log("every introduction",memeber);
            //to return until Ingrid Jesen and stop the iteration of every element in the array
            if(memeber==='Ingrid Jesen'){
                return false
            }
            return true;
        })

        //for each also can be use with Objects


//Array and forloops with objects.

(function(){
    "use stric";
    var musicians = [
        {
            name:"esperanza spalding",
            instruments: ["bass","voice"],
            since:2006,
        },
        {
            name:"Jacob Collier",
            instruments: ["bass","voice","piano","drums"],
            since:20166,
        },
        {
            name:"Theo Karzman",
            instruments: ["guitar","voice","drums"],
            since: 2011,

        },
        {
            name:"Terri Lyne Carrington", 
            instruments: ["drums"],
            since: 1984,

        }
    ];

//filter for just the drummers
var drummers = [];
for(var i =0; i<musicians.length; i++){
    var person = musicians[i];
//forloop the drums
    if(person.instruments.indexOf("drums")!== -1) {
        drummers.push(person);
    }
}
//shout their names with a rebel yell
for(var d= 0; d<drummers.length; d++){
    var drummerName = drummers[d].name.toUpperCase();
    console.log(drummerName,"plays Drums! Yeah");
    drummers[d].name = drummerName;
}
//get the total years of experience for the drummers
var currentlyYear = new Date().getFullYear();
var totalYears = 0;
for(var d =0; d<drummers.length; d++){
    totalYears += currentlyYear - drummers[d].since;

    console.log("these drummers have been active for",totalYears,"years")
}

})();

//filter map, reduce
//filter items from items return    callabck return false an the item is lost return true
///map every item in an array
//reduce takes an array an reduce for an array

//filter
var drummer = musicians
.filter(function(person){
    return person.instruments.indexOf("drums") !==-1;
})
//maps
.map(function(drummer) {
    drummers.name = drummer.name.toUpperCase();
    console.log(drummer.name,"plays drums, yeah!");

    return drummer;
})

//reduce
 var currentlyYear = new Date().getFullYear();
 var totalYears = drummer.reduce(function(totalYears,drummer){
    return (totalYears += currentlyYear-drummer.since);

 },0)

 console.log("these drummers have been active for",totalYears,"years")

 var avgYears = drummers.reduce(function(totalYears,drummer,index){
    totalYears += currentlyYear - drummer.since;

    if(index === drummers.length -1) {
        return totalYears/drummers.length;

    }else{
        return totalYears
    }
    
 })
 console.log(avgYears());

})