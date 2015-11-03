/*JSLint warning settings*/
/*jslint  plusplus: true, devel: true*/
/*global $ */

console.log("Here we go again!");

//This variable is shown to every function
//var g_person_data;

//Wait document ready event
$(document).ready(function () {
    "use strict";
    console.log("jquery onload triggered");
    //$("nav").css("background-color","lightblue");
    //$("footer").css("background-color", "darkblue");
    //$("[class]").css("background-color", "grey");
    //$("#head").css("background-color", "red").css("padding", "20px").css("border-radius", "8px");
    //$(".about").html("New text from jQuery"); //Add new text.
    //$("[data-dummy]").html("<p>Hello World</p>"); //Muuttaa data-dummy elementin tekstin
    
    var setting =  {
        
        method: "GET",  //default method is GET
        url: "http://localhost:3000/persons",
        dataType: "json"
        
    };
    
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        var i = 0, k = 0, headers = 0, row = 0, row2 = 0;
  
        //get all keys (attribute names)from json object
        console.log(Object.keys(data[0]));
        
        //Create headers also dynamically, check that rows length is > 0
        if (data.length > 0) {
            headers = Object.keys(data[0]);
            //Create row for headers
            row = $("<tr></tr>");
            for (i = 1; i < headers.length; i++) {
                //Create header and add it to row
                $("<th>" + headers[i] + "</th>").appendTo(row);
            }
            //Add row to thead element
            $(row).appendTo("thead");
        }

        
        for (i = 0; i < data.length; i++) {


            var html = "<tr>" +
                        "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].address + "</td>" +
                        "<td>" + data[i].age + "</td>" +
                        "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>" +
                        "</tr>";
                        
            $(html).appendTo("tbody");
            //All tbody tables, use selectors to use only one if several tbodys in use.
            
            //Create data rows also dynamically, check that rows length is > 0
            /*if (data.length > 0) {

                //Create row for data
                row2 = $("<tr></tr>");
                for (k = 1; k < headers.length; k++) {
                    //Create data and add it to row
                    $("<td>" + data[i][headers[k]] + "</td>").appendTo(row2);
                }
                //Add row to thead element
                $(row2).appendTo("tbody");
            }*/
        }
        
        //Add person start

      /*      var html = "<tr>" +
                        "<td>" + "<input type=" + "'text'" + "id=" + "'name'" + "placeholder=" + "'Enter name'" 
                        + "/>" + "</td>" +
                        "<td>" + "<input type=" + "'text'" + "id=" + "'address'" + "placeholder=" + "'Enter address'" 
                        + "/>" + "</td>" +
                        "<td>" + "<input type=" + "'number'" + "id=" + "'age'" + "placeholder=" + "'Enter age'" 
                        + "/>" + "</td>" +
                        "<td>" + "<input type=" + "'email'" + "id=" + "'email'" + "placeholder=" + "'Enter email'" 
                        + "/>" + "</td>" +
                        "<td>" + "<input type=" + "'submit'" + "value=" + "'Submit'" + "/>" + "</td>" +
                        "</tr>";
                        
            $(html).appendTo(".addperson");
            */
        //Add person end
        

       //Get all elements from DOM where element has attribute 'tye' with value 'button'
        //Then add event handler for click event for each of them.
        $("[type=button]").click(function (click_data) {

            console.log(click_data);
            for (i = 0; i < data.length; i++) {
                
                //Check if id from button matches on of person id
                if (click_data.currentTarget.id == data[i]._id) {
                    
                    buildModifyUI(data[i]);
                    break;
                }
            }
        });
        
    });
});

function buildModifyUI(person_data) {
    
    var html = "<input type='text' value='" + person_data.name + "'/>";
    $("body").html(html);
    
}

        // Add person Test 
/*

function omaFunction() {
    document.getElementById("name").value = "Testi nimi";
    document.getElementById("address").value = "Testi osoite";
    document.getElementById("age").value = "999";
    document.getElementById("email").value = "Testi@email";
};
*/

        //test end
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
