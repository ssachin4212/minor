var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var Superhero = new Schema(
    {name : String, date : String, time : String}
);

mongoose.model('superheroes', Superhero);