import {Country} from "../common/country";

var client = require('./client');

client.getCountries((callback)=>{
    var country = new Country(callback[0].countryCode, callback[0].Name,callback[0].Uri);
    console.log(country);
});