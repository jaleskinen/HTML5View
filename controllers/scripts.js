//"use strict";
console.log("Here we go again!");

//Wait document ready event
$(document).ready(function () {
    
    console.log("jquery onload triggered");
    //$("nav").css("background-color","lightblue");
    //$("footer").css("background-color", "darkblue");
    //$("[class]").css("background-color", "grey");
    $("#head").css("background-color", "red").css("padding", "20px").css("border-radius", "8px");
    
    $(".about").html("New text from jQuery"); //Add new text.
    //$("[data-dummy]").html("<p>Hello World</p>"); //Muuttaa data-dummy elementin tekstin
    
    
    var setting =  {
        
        method: "GET",  //default method is GET
        url: "http://localhost:28017/oma/person/",
        dataType: "jsonp",
        jsonp: "jsonp"
        
    };
    
    
    $.ajax(setting).done(function(data) {
        console.log(data);
  
        //get all keys (attribute names)from json object
        console.log(Object.keys(data.rows[0]));
        
        //Create headers also dynamically, check that rows length is > 0
        if(data.rows.length > 0) {
            var headers = Object.keys(data.rows[0]);
            //Create row for headers
            var row = $("<tr></tr>");
            for (i = 1; i < headers.length; i++) {
                //Create header and add it to row
                $("<th>" + headers[i] + "</th>").appendTo(row);
                }
                //Add row to thead element
                $(row).appendTo("thead");
        }

        
        for (i = 0; i < data.rows.length; i++) {
            
            
            /*html += "<tr>";
            for(var k =0;k<headers.length;k++)
                {
                    html += "<td>" + data.rows[k][headers[k]] + "</td>;"
                }
            html += "</tr>"; */
            
            var html = "<tr>" +
                        "<td>" + data.rows[i].name + "</td>" +
                        "<td>" + data.rows[i].address + "</td>" +
                        "<td>" + data.rows[i].age + "</td>" +
                        "<td>" + data.rows[i].email + "</td>" +
                        "</tr>";
            
            $(html).appendTo("tbody"); //All tbody tables, use selectors to use only one if several tbodys in use.
            
            
        }
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
