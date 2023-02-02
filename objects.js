(function(_){
    "use strict"

    var kitty = {
        name: "Squiggy",
        color: "orange",
        age:5,
        chipID: "ZA123456",
        offspring: ["Mars,Juipeter","Mercury"],
        bestFriend : {
            name:"Crackers",

        },
        meow: function() {
            return "Meow says" + this.name;
        },

    };
    var mudge = JSON.parse(JSON.stringify(kitty));
    mudge.name = "Mudge",
    mudge.chipID= "YYZ123"

    //to make a cloun of the original object 
    var knuckle = Object.assign({},kitty);
    knuckle.name = "Knuckle";
    knuckle.bestFriend="katy";
    knuckle.meow= function() {
        return "yeahh","says" + this.name;
    }
    debugger;
// to succesfully clone the bf with out 
var comma = _.cloneDeep(kitty);
comma.name = "comma";
comma.bestFriend.name = "Dash "

})(_)