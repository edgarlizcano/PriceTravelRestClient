const clientRest = require("node-rest-client").Client;
const client = new clientRest();

client.get(url, function (data, callback) {
    // parsed response body as js object
    console.log(data);
    callback(data);
    // raw response
    //console.log(response);
});
// Método directo
client.post("http://remote.site/rest/xml/method", args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});
//Registrando Métodos
client.registerMethod("getDestinos", url, "GET");



