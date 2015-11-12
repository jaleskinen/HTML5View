/*JSLint warning settings*/
/*jslint  plusplus: true, devel: true*/
/*global $ */

$(document).ready(function () {
    
    console.log("Login or Register page loaded");
    
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);
    
});

/*This function is called when login button is pressed*/

function loginHandler(event) {
    
    console.log("Login request");
    
    var requestData = {
        
        username: $("#username").val(),
        password: $("#password").val()
    };
    
    //Send login request to server
    $.ajax({
        
        method: 'POST',
        url: 'http://localhost:3000/friends/login',
        data: requestData,
        dataType: 'json'
    });
}

/*This function is called when register button is pressed*/

function registerHandler(event) {

    var requestData = {

        username: $("#username").val(),
        password: $("#password").val()
    };
                
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
    
    $("#status").text(data.status);

    
}


