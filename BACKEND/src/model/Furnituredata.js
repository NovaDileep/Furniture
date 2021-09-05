const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FurnitureDb');
const Schema = mongoose.Schema;

var NewFurnitureSchema = new Schema({

    newName : String,
    newprice : Number,
    newrating :Number,
    newdescription:String,
    newimageUrl : String
});
/*
var OldFurnitureSchema = new Schema({

    Name : String,
    Price : Number,
    Rating :Number,
    Description:String,
    imageurl : String
});
*/
var newFurnituredata = mongoose.model('newfurniture', NewFurnitureSchema);                        //UserData is the model and NewBookData is the schema
//var oldFurnituredata = mongoose.model('oldfurniture', OldFurnitureSchema);                        //UserData is the model and NewBookData is the schema


module.exports = newFurnituredata;
//module.exports=oldFurnituredata;