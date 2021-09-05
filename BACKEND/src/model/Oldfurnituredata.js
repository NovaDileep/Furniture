const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FurnitureDb');
const Schema = mongoose.Schema;

var OldFurnitureSchema = new Schema({

    Name : String,
    Price : Number,
    Rating :Number,
    Description:String,
    imageurl : String
});

                      //UserData is the model and NewBookData is the schema
var oldFurnituredata = mongoose.model('oldfurniture', OldFurnitureSchema);                        //UserData is the model and NewBookData is the schema



module.exports=oldFurnituredata;