//function for the js works 


function light (sw) {
    var light;
    if(sw === 0){
        light = 'pic_bulboff.gif'

    } else {
        light = "pic_bulbon.gif"
    }
    document.getElementById('myImage').src = light;
}