//"use strict";
console.log("Here we go again!");

//Wait document ready event
$(document).ready(function () {
    
    console.log("jquery onload triggered");
    //$("nav").css("background-color","lightblue");
    //$("footer").css("background-color", "darkblue");
    //$("[class]").css("background-color", "grey");
    $("#head").css("background-color", "red").css("padding", "20px").css("border-radius", "8px");
    
    $(".about").html("<u>New text from jQuery</u>"); //Add new text.
    $("[data-dummy]").html("<p>Hello World</p>"); //Muuttaa data-dummy elementin tekstin
    
    var setting =  {
        
        method: "GET",
        url: "http://localhost:28017/oma/person/",
        dataType: "jsonp",
        jsonp: "jsonp"
        
    };
    
    
    $.ajax(setting).done(function (data) {
        console.log(data);
    });
    
});

/*$(document).ready(domReady);
function domReady(){

}*/

/*
window.onload = function (event) {
    console.log(event);
    para1.innerHTML = "Changed from JS";
    para1.style.backgroundColor = "yellow";
    
}
*/

/* Sama asia eri toteutuksella */
/*
window.onload = domReady;
function domReady(event) {
     console.log(event);
    para1.innerHTML = "Changed from JS";
    para1.style.backgroundColor = "grey";
}
*/

/*
function someFunction(nimi) {
    console.log(nimi)
}

someFunction(22);
someFunction("Jarmo");
*/
