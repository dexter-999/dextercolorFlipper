var colorFlipper = document.getElementById('color-flipper');
var colorBody = document.getElementById('body');

var colors = ["red","blue","orange","green"];

var i=0;


colorFlipper.addEventListener('click',function(){

    colorBody.style.backgroundColor = colors[i];
    i++;
    if(i===3){
        i=0;
    }
});