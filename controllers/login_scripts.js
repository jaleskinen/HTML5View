/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*these vars are defined here because of lint errors*/
var $, loginHandler, registerHandler, loginResponseHandler, registerResponseHandler;

$(document).ready(function () {
    "use strict";
    console.log("Login or Register page loaded");
    
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);
    
});

/*This function is called when login button is pressed*/

function loginHandler(event) {
    "use strict";
    console.log("Login request");
    
    var requestData = {
        
        username: $("#username").val(),
        password: $("#password").val()
    };
    
    console.log("username: " + requestData.username);
    console.log("password: " + requestData.password);
    
//    localStorage['username'] = $("#username").val(); //localstorage tallentaa kunnes se ylikirjoitetaan
//    sessionStorage['user'] = $("#username").val(); //localstorage tallentaa kunnes sessio lopetetaan
    localStorage.username = $("#username").val(); //localstorage tallentaa kunnes se ylikirjoitetaan
    sessionStorage.user = $("#username").val(); //localstorage tallentaa kunnes sessio lopetetaan
    
    
    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'http://localhost:3000/friends/login',
        data: requestData,
        dataType: 'json'
    }).done(loginResponseHandler);
}

/*This function is called when register response arrives in some point of time*/
function loginResponseHandler(data) {
    "use strict";
    // If login status was ok
    if (data.status === "Login OK") {
        
        // Ask browser to load person.html file from node server
        window.location.href = 'http://localhost:3000/persons.html';
    } else {
        
        $("#status").text(data.status);
    }
}

function renderPersonView(data) {
    "use strict";
    console.log(data);
    $("html").html(data);
}

/*This function is called when register button is pressed*/

function registerHandler(event) {
    "use strict";
    console.log("Register request");

    var requestData = {

        username: $("#username").val(),
        password: $("#password").val()
    };
    
    console.log("username: " + requestData.username);
    console.log("password: " + requestData.password);
                
    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'http://localhost:3000/friends/register',
        data: requestData,
        dataType: 'json'
    }).done(registerResponseHandler);
}

/*This function is called when register response arrives in some point of time*/
function registerResponseHandler(data) {
    "use strict";
    $("#status").text(data.status);

    
}


