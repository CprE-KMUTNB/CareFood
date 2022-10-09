const mongoose=require('mongoose')
const dbUrl ='mongodb://localhost:27017/DB'
var bcrypt = require("bcryptjs");

mongoose.connect(dbUrl,{
    useNewUrlParser:true
}
    )
const db = mongoose.connection
const Schema = mongoose.Schema
const dbSchema =new Schema({
    id:{
        type:Schema.ObjectId
    },Email:{
        type:String,
        require:true
    },Password:{
        type:String,
        require:true
    },Realname:{
        type:String,
        require:true
    },Surname:{
        type:String,
        require:true
    },Gender:{
        type:String,
        require:true
    },Age:{
        type:String,
        require:true
    },Height:{
        type:String,
        require:true
    },Weight:{
        type:String,
        require:true
    }
})
const DATABASE = module.exports=mongoose.model("Database",dbSchema)
module.exports.createDB=function(newDB,callback){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newDB.Password, salt, function(err, hash) {
        newDB.Password = hash;
        newDB.save(callback);
        });
    });
module.exports.getUserById=function(id,callback){
        DATABASE.findById(id,callback);
    }
module.exports.getUserByName=function(email,callback){
        var query={
            Email:email
        };
        DATABASE.findOne(query,callback);
    }
}
module.exports.getAllData=function(data){
    DATABASE.find(data)
}