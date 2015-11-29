var i
//Wait document ready event
$(document).ready(function () {
    "use strict";
    console.log("scripts.js document ready");
 
    $("#search").click(function () {
        console.log("Search triggered");
        var text = $("#search_text").val();
        console.log("search_text: " + text);
        $.ajax({
            
            method: 'GET',
            url: 'http://localhost:3000/persons/name=' + text + '/username=' + localStorage.username
        }).done(buildTable);
    });
    
    var setting =  {
        
        method: "GET",  //default method is GET
        url: "http://localhost:3000/friends/username=" + localStorage.username,
        dataType: "json"
        
    };
    
    $.ajax(setting).done(buildTable);
    
});
 

/**
  *Creates a modify view for our application
  */
function buildModifyUI(person_data, data) {
    "use strict";
    console.log("data.length: " + data.length);
    var headers = Object.keys(data[0]);
    var row_html;
    console.log("headers.length: " + headers.length);

    
    // Testi begin
    var html = $("<div></div>");
    $("<h1 class='oma_h1'>Muokkaa/poista tietoja</h1>").appendTo(html);
    for (var k = 1; k < (headers.length-1) ; k++) {
        
            //Create data and add it to row          
            $("<h4 class ='oma_h4'>" + [headers[k]] + "</h4>").appendTo(html);
            $("<input type='text' style='text-align: center' value='" + data[i][headers[k]] + "' id ='" + [headers[k]] + "'/><br>").appendTo(html);
        }
       /* if (location.pathname == "/horse.html" ) {    
            $("<form target='_blank' action='http://www.sukuposti.net/hevonen/hae'><input type='submit' value='Hae Linkki'></form>").appendTo(row_html);
        };*/
        $("<br><br><input type='button' class='btn btn-primary btn-sm' value='Update'" + "id = 'update'/><input type='button' class='btn btn-primary btn-sm' value='Delete' id = 'delete'/><input type='button' class='btn btn-primary btn-sm' value='Cancel' id = 'cancel'/>").appendTo(html);   
    
    //Test end
    
 /*
    var html = "<h1 class='about'>Modify</h1>";
    html += "<h4>Name</h4>";
    html += "<input id='name' type='text' value='" + person_data.name + "'/><br>";
    html += "<h4>Address</h4>";
    html += "<input id='address' type='text' value='" + person_data.address + "'/><br>";
    html += "<h4>Age</h4>";
    html += "<input id='age' type='text' value='" + person_data.age + "'/><br><br>";
    html += "<input type='button' class='btn btn-default' value='Update' id='update'/>";
    html += "<input type='button' class='btn btn-default' value='Delete' id='delete'/>";
    html += "<input type='button' class='btn btn-default' value='Cancel' id='cancel'/>";
     */
    
    
    $("body").html(html);
    
    $("#delete").click(function () {
        
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:3000/persons/id=' + person_data._id + '/username=' + localStorage.username
        }).done(function (data) {
            location.reload(true);
        });
    });
    
    $("#update").click(function () {
        console.log("Update pressed");
        var temp = {
            id: person_data._id,
            name: $("#name").val(),
            address: $("#address").val(),
            age: $("#age").val()
        };
        
        $.ajax({
            method: "PUT",
            url: 'http://localhost:3000/persons',
            dataType: 'json',
            data: temp
        }).done(function (data) {
            console.log("update response received");
            location.reload(true);
        });
    });
    
    //If cancel, just reload original page    
    $("#cancel").click(function () {
        location.reload(true);
    });
}

function buildTable(data) {
    "use strict";
            
    console.log("buildTable: " + data);
    //Get all keys (attribute names) from json object
    //console.log(Object.keys(data[0]));
    $("tbody").children().remove();
    $("thead").children().remove();
    //Check that there are elements in array
    if (data.length > 0) {
        //Create table headers dynamically
        var headers = Object.keys(data[0]);
        //Create row for headers
        var row = $("<tr></tr>");
        for (i = 1; i < headers.length - 1; i++) {
            //Create header and add it to orw
            $("<th>" + headers[i] + "</th>").appendTo(row);
        }
        //Add row to thead element
        $(row).appendTo("thead");
    }
    
    //Create table content dynamically
    for (i = 0; i < data.length; i++) {

        var html = "<tr>" +
                   "<td>" + data[i].name + "</td>" +
                   "<td>" + data[i].address + "</td>" +
                   "<td>" + data[i].age + "</td>" +
                   "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>" +
                   "</tr>";

        $(html).appendTo("tbody");
    }

    //Get all elements from DOM where element has
    //attribute 'type' with value 'button'. Then add
    //event handler for click event for each of them
    $("[type=button]").click(function (click_data) {

        //Loop trough all the values
        for (i = 0; i < data.length; i++) {

            //Check if id from button matches one of 
            //person id
            if (click_data.currentTarget.id === data[i]._id) {
                buildModifyUI(data[i], data);
                break;
            }
        }
    });
}
