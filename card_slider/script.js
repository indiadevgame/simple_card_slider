let slider = document.getElementById("slider_main");

let slider_card = slider.getElementsByClassName("slider");


function next(){
    slider.append(slider_card[0]);
}

function prev(){
    slider.prepend(slider_card[slider_card.length -1])
}


// let auto = setInterval(()=>{
//     slider.append(slider_card[0]);
    
// } , 1000)