/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*these vars are defined here because of lint errors*/
var $, headers, row3, k, i, buildModifyUI, clickModifyButton;

console.log("Here we go again!");

//This variable is shown to every function
//var g_person_data;

//Wait document ready event
$(document).ready(function () {
    "use strict";
    console.log("scripts.js document ready");
 
    $("#search").click(function () {
        console.log("search triggered");
        var text = $("#search_text").val();

        $.ajax({
            
            method: 'GET',
            url: 'http://localhost:3000/persons/nimi=' + text
        }).done(function (data) {
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
                    $("<td><input type='button' class='btn btn-default' id=" + data[i]._id + " value='Modify'/></td>").appendTo(row2);
                    //Add row to thead element
                    $(row2).appendTo("tbody");
                    //Optimise this code later...
 /*                   $("[type=button]").click(function (click_data) {
                        console.log(click_data);
                        for (i = 0; i < data.length; i++) {

                            //Check if id from button matches on of person id
                            if (click_data.currentTarget.id === data[i]._id) {

                                buildModifyUI(data[i], i);
                                break;
                            }
                        }
                    });*/
                }
            }
  
            //Optimise this code later...
            $("[type=button]").click(function (click_data) {
                clickModifyButton(click_data, data);

 /*              console.log(click_data);
                for (i = 0; i < data.length; i++) {

                    //Check if id from button matches on of person id
                    if (click_data.currentTarget.id === data[i]._id) {

                        buildModifyUI(data[i], i);
                        break;
                    }
                }*/
            });
        });
    });
    
    var setting =  {
        
        method: "GET",  //default method is GET
        //url: "http://localhost:3000/persons",
        url: "http://localhost:3000/friends/username=" +
            //localStorage['username'],
            localStorage.username,
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
            for (i = 1; i < headers.length - 1; i++) {
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
                for (k = 1; k < headers.length - 1; k++) {
                    //Create data and add it to row
                    $("<td>" + data[i][headers[k]] + "</td>").appendTo(row2);
                }
                $("<td><input type='button' class='btn btn-default' id=" + data[i]._id + " value='Modify'/></td>").appendTo(row2);
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
            clickModifyButton(click_data, data);

/*            console.log("click_data: " + click_data);
            for (i = 0; i < data.length; i++) {
                
                //Check if id from button matches on of person id
                if (click_data.currentTarget.id === data[i]._id) {
                    
                    buildModifyUI(data[i], i);
                    break;
                }
            }*/
        });
        
    });
});

//Search button clicked
function clickModifyButton(click_data, data) {
    "use strict";
    console.log("data.length: " + data.length);
    console.log("click_data.currentTarget.id: " + click_data.currentTarget.id);
    
    for (i = 0; i < data.length; i++) {

        //Check if id from button matches on of person id
        if (click_data.currentTarget.id === data[i]._id) {
            console.log("data[i]._id" + data[i]._id);
            buildModifyUI(data[i], i);
            break;
        }
    }
}

function buildModifyUI(person_data, i) {
    "use strict";

    var setting =  {
        
        method: "GET",  //default method is GET
        url: "http://localhost:3000/persons",
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
                person_data[headers[k]] + "' id ='" + headers[k] + "'/><br>").appendTo(row3);
        }
        $("<br><input type='button' value='Update' class='btn btn-default' id = 'update'/><input type='button' class='btn btn-default' value='Delete' id = 'delete'/><input type='button' class='btn btn-default' value='Cancel' id = 'cancel'/>").appendTo(row3);

 
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
            }).done(function (data) {
                location.reload(true);
            });  //reload page after delete done
        });
    
        $("#update").click(function () {
        
            var temp = {
                id: person_data._id,
                name: $("#name").val(),
                address: $("#address").val(),
                age: $("#age").val(),
                email: $("#email").val()

            };

            $.ajax({
            
                method: 'PUT',
                url: 'http://localhost:3000/persons',
                //dataType: 'json',
                data: temp
            }).done(function (data) {
                location.reload(true);
            });  //reload page after update done
        });
        //If cancel, just reload original page    
        $("#cancel").click(function () {
            location.reload(true);
        });
    });
}

function buildTable(data) {
    "use strict";
    var i = 0, k = 0, row2 = 0, headers = 0;
    headers = Object.keys(data[0]);

    $("tbody").children().remove();
    $("thead").children().remove();

    for (i = 0; i < data.length; i++) {

        //Create data rows also dynamically, check that rows length is > 0
        if (data.length > 0) {

            //Create row for data
            row2 = $("<tr></tr>");
            for (k = 1; k < headers.length; k++) {
                //Create data and add it to row
                $("<td>" + data[i][headers[k]] + "</td>").appendTo(row2);
            }
            $("<td><input type='button' class='btn btn-default' id=" + data[i]._id + " value='Modify'/></td>").appendTo(row2);
            //Add row to thead element
            $(row2).appendTo("tbody");
        }
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
                buildModifyUI(data[i]);
                break;
            }


        }
    });
}