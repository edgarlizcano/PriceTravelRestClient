
    var args = require('./userConfig');
    const clientRest = require("node-rest-client").Client;
    const client = new clientRest();

    //*************************************//
    ////////////////Resources////////////////
    //*************************************//
{
    //Returns a list of countries. To get the Destination information you must specify a Country id as shown in the next service.
    exports.getCountries = function () {
        client.get("https://test-api.pricetravel.com.mx/services/catalogs/countries", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Return a specified country.
    exports.getCountry = function (idCountry) {
        client.get("https://test-api.pricetravel.com.mx/services/catalogs/countries/" + idCountry, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Represent a destination. To search for a list of Hotels is necessary to know the destinationId.
    exports.getDestinations = function () {
        client.get("https://test-api.pricetravel.com.mx/services/catalogs/destinations", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Returns the information associated of the Destinations with the specified country id.
    exports.getDestinationsByCountry = function (idCountry, idDestination) {
        client.get("https://test-api.pricetravel.com.mx/services/catalogs/countries/" + idCountry + "/destinations/" + idDestination, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Returns a paginated Hotel list at the Destination specified as parameter.
    exports.getHotels = function () {
        client.get("https://test-api.pricetravel.com.mx/services/hotels", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Represents a Hotel created in the system. Contain information about Rooms, Services, and Images belonging to the Hotel.
    exports.getHotel = function (idHotel) {
        client.get("https://test-api.pricetravel.com.mx/services/hotels/" + idHotel, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //List Tours for the specified destination. If GetQuotingInfo is send as true, the response will include Criteria for Quoting with Kids and base rates, if it is send as fals or is not specified, the response will not include that info.
    exports.getTours = function () {
        client.get("https://test-api.pricetravel.com.mx/services/tours", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Represents a Tour. Contains information like Description, Pictures and Operating Hours.
    exports.getTour = function (idTour) {
        client.get("https://test-api.pricetravel.com.mx/services/tours/" + idTour, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Lists destinations with tours. These are NOT the same destinations used with Hotels, but some may have the same name.
    exports.getDestinationsByTour = function () {
        client.get("https://test-api.pricetravel.com.mx/services/catalogs/tours/destinations", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Represent a quote criteria for tours with kids. The criteria includes the type of criteria (Height or Age) and the minimum and maximum values for someone to be considered a children.
    exports.getKidCriteria = function (idTour) {
        client.get("https://test-api.pricetravel.com.mx/services/tours/kidCriteria/" + idTour, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Gets the survey from users for a specified tour.
    exports.getToursSurvey = function (idTour) {
        client.get("https://test-api.pricetravel.com.mx/services/tours/survey/" + idTour, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Gets map info for a specified tour.
    exports.getMapInfo = function (idTour) {
        client.get("https://test-api.pricetravel.com.mx/services/tours/survey/" + idTour, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }
}

    //*************************************//
    ////////////////Services/////////////////
    //*************************************//
{
    //Rates and information of Flight services.
    exports.getItineraries = function () {
        client.get("https://test-api.pricetravel.com.mx/services/flights/itineraries", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Returns Hotels information at the specified destination parameter. You need to send dates and passenger information.
    exports.getHotelAvailability = function () {
        client.get("https://test-api.pricetravel.com.mx/services/hotels/availability", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }
    //Returns Hotel availability information specified in the destination parameter. You need to send dates and passenger information.
    exports.getHotelAvailabilityById = function (idHotel) {
        client.get("https://test-api.pricetravel.com.mx/services/hotels/"+idHotel+"/availability", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Quote available Transfers for the specified parameters. This service includes Transfer rates.
    exports.getTransfers = function () {
        client.get("https://test-api.pricetravel.com.mx/services/transfers", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Quote available Transfers for the specified parameters. This service includes Transfer rates.
    exports.getTransferByID = function (idTransfer) {
        client.get("https://test-api.pricetravel.com.mx/services/transfers/"+idTransfer, args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

    //Creates a Reservation with the items sent in the body of the request.
    exports.getBooking = function () {
        client.post("https://test-api.pricetravel.com.mx/services/bookings/create", args, function (data, callback) {
            console.log("Data: " + JSON.stringify(data));
            console.log("Callb: " + callback);
        });
    }

}

/*// Método directo
client.post("http://remote.site/rest/xml/method", args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    console.log(response);
});
//Registrando Métodos
client.registerMethod("getDestinos", url, "GET");

client.methods.getDestinos((data, response)=>{

})*/


