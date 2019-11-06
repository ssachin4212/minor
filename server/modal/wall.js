var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var Wallogin = new Schema(
    {name : String}
);

mongoose.model('user', Wallogin);