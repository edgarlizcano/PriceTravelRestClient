const express = require("express");
const clientRest = require("node-rest-client").Client;
const app = express();
const client = new clientRest();

app.get("/", function(request, response){
    client.get("https://sandbox-api.brewerydb.com/v2/", function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        //console.log(response);
    });
    response.end();
});

app.get("/calendar", function(request, response){
    client.get("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2015/6/27", function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        //console.log(response);
    });
    response.end();
});

app.post("/post", function(request, response){
    // set content-type header and data as json in args parameter
    var args = {
        data: { test: "hello" },
        headers: { 
            "Content-Type": "application/json",
            "Authorization": "Basic ZWRnYXJsaXpjYW5vQGdtYWlsLmNvbTptYW1ib3NvbjM="
        }
    };
    
    client.post("https://test-api.pricetravel.com.mx/services/catalogs/destinations", args, function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        //console.log(response);
    });
    response.end();
});

app.listen(3000, function(){
    console.log("Cliente en el puerto 3000");
});