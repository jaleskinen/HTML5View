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
    
    console.log("username: " + requestData.username);
    console.log("password: " + requestData.password);
    
    localStorage['username'] = $("#username").val();
    sessionStorage['user'] = $("#username").val();
    
    
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
    
    // If login status was ok
    if (data.status === "Login OK") {
        
        // Ask browser to load person.html file from node server
        window.location.href= 'http://localhost:3000/persons.html';
    } else {
        
        $("#status").text(data.status);
    }
}

function renderPersonView(data) {
    
    console.log(data);
    $("html").html(data);
}

/*This function is called when register button is pressed*/

function registerHandler(event) {
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
    
    $("#status").text(data.status);

    
}


