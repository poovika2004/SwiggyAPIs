const mongoose = require('mongoose')
const restaurantsSchema = new mongoose.Schema({
    areaName: {
        type:String
    },
    avgRating: {
        type:Number
    },
    constForTwo: {
        type:String
    },
    cuisines: {
        type:Array
    },
    name: {
        type:String
    }
})
const Restaurant = mongoose.model('restaurantList',restaurantsSchema)
const userSchema = new mongoose.Schema({
    contact :{
        type:Number
    },
    userName : {
        type : String
    },
    email : {
        type : String
        // required:true,
        // unique:true
    },
    password : {
        type : String
        // required:true
    }
})
const Users= mongoose.model('userDetail',userSchema)
module.exports={Restaurant,Users}
