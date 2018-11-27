//import {Country} from "./dist/country";
var sdsd = require('./dist/country');
var client = require('./lib/client');

client.getCountries((callback)=>{
    //var country = new sdsd(callback[0].countryCode, callback[0].Name,callback[0].Uri);
    console.log(JSON.stringify(callback));
});