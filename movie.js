var keys = require('./env')

var request = require('request')

function get(movieTitle){

request("https://www.googleapis.com/customsearch/v1?key=" + keys.apiKey + "&cx=" + keys.idKey + "&q=" + movieTitle + " ", function(error, response, body){
    var y = JSON.parse(body)
    console.log(y.items[0].title)
    });
}

module.exports = get;