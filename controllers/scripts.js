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
 
    $("#search").click(function() {
        console.log("search triggered");
        var text = $("#search_text").val();

        $.ajax({
            
            method: 'GET',
            url: 'http://localhost:3000/persons/nimi=' + text
        }).done(function(data) {
            console.log(data);
            var i = 0, k = 0, row2 = 0, headers = 0;
            headers = Object.keys(data[0]);
            console.log("headers.length: " + headers.length);
            
            $("tbody").children().remove();

            for (i = 0; i < data.length; i++) {

                //Create data rows also dynamically, check that rows length is > 0
                if (data.length > 0) {

                    //Create row for data
                    row2 = $("<tr></tr>");
                    for (k = 1; k < headers.length; k++) {
                        //Create data and add it to row
                        $("<td>" + data[i][headers[k]] + "</td>").appendTo(row2);
                    }
                    $("<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>").appendTo(row2);
                    //Add row to thead element
                    $(row2).appendTo("tbody");
                }
            }
            
        });
    });
    
    var setting =  {
        
        method: "GET",  //default method is GET
        url: "http://localhost:3000/persons",
        //url: "http://localhost:3000/horses",
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
            $("<th>" + "Modify" + "</th>").appendTo(row);
            //Add row to thead element
            $(row).appendTo("thead");
        }

        
        for (i = 0; i < data.length; i++) {

/*
            var html = "<tr>" +
                        "<td>" + data[i].name + "</td>" +
                        "<td>" + data[i].address + "</td>" +
                        "<td>" + data[i].age + "</td>" +
                        "<td>" + data[i].email + "</td>" +
                        "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>" +
                        "</tr>";
                        
            $(html).appendTo("tbody");*/
            //All tbody tables, use selectors to use only one if several tbodys in use.
            
            //Create data rows also dynamically, check that rows length is > 0
            if (data.length > 0) {

                //Create row for data
                row2 = $("<tr></tr>");
                for (k = 1; k < headers.length; k++) {
                    //Create data and add it to row
                    $("<td>" + data[i][headers[k]] + "</td>").appendTo(row2);
                }
                $("<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>").appendTo(row2);
                //Add row to thead element
                $(row2).appendTo("tbody");
            }
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
                    
                    buildModifyUI(data[i], i);
                    break;
                }
            }
        });
        
    });
});

function buildModifyUI(person_data, i) {
    //var row3 = 0;
    var setting =  {
        
        method: "GET",  //default method is GET
        url: "http://localhost:3000/persons",
        //url: "http://localhost:3000/horses",
        dataType: "json"
        
    };
    
    
    $.ajax(setting).done(function (data) {
        console.log(data);
        
    
        //get all keys (attribute names)from json object
        console.log(Object.keys(data[0]));
     
        headers = Object.keys(data[0]);
        //Create headers also dynamically, check that rows length is > 0
          

        //var html =
        row3 = $("<div></div>");
        for (k = 1; k < headers.length; k++) {
            //Create data and add it to row
            $("<h4>" + headers[k] + "</h4>" + "<input type='text' value='" + 
              data[i][headers[k]] + "' id ='" + headers[k] + "'/><br>").appendTo(row3);
        }
        $("<br><input type='button' value='Update' id = 'update'/><input type='button' value='Delete' id = 'delete'/><input type='button' value='Cancel' id = 'cancel'/>").appendTo(row3);

 
    /*    
        "<h4>Name:</h4>" +
        "<input type='text' value='" + person_data.name + "' id ='name'/><br>" +
        "<h4>Address:</h4>" +
        "<input type='text' value='" + person_data.address + "' id ='address'/><br>" +
        "<h4>Age:</h4>" +
        "<input type='text' value='" + person_data.age + "' id ='age'/><br>" +
        "<h4>Email:</h4>" +
        "<input type='text' value='" + person_data.email + "' id ='email'/><br><br>" +
        "<input type='button' value='Update' id = 'update'/><input type='button' value='Delete' id = 'delete'/>";
       
     */   
        /*"</form>";*/
        
       /* "<input type='submit' value='Update'/><input type='submit' value='Delete'/>";*/
    
    $("body").html(row3);
    

        //#delete hakee id elementtiä 'delete'. Jos .delete hakisi class elementtiä 'delete'
    $("#delete").click(function () {
        
        $.ajax({
            
            method: 'DELETE',
            url: 'http://localhost:3000/persons/id=' + person_data._id
            //url: 'http://localhost:3000/horses/id=' + person_data._id
        }).done(function (data) {location.reload(true)});  //reload page after delete done
    });
    
    $("#update").click(function () {
        
        var temp = {
            id: person_data._id,
            name: $("#name").val(),
            address: $("#address").val(),
            age: $("#age").val(),
            email: $("#email").val()

        };
/*        
        var temp_horse = {
            id: person_data._id,
            Nimi: $("#Nimi").val(),
            Kutsumanimi: $("#Kutsumanimi").val(),
            Syntymäaika: $("#Syntymäaika").val(),
            Esittely: $("#Esittely").val()

        };*/
        $.ajax({
            
            method: 'PUT',
            url: 'http://localhost:3000/persons',
            //url: 'http://localhost:3000/horses',
            //dataType: 'json',
            data: temp
            //data: temp_horse
        }).done(function (data) {location.reload(true)});  //reload page after update done
    });
        //If cancel, just reload original page    
        $("#cancel").click(function () {
            location.reload(true);
        });
    });    
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
