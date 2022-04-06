///////////////////////// SCHEMA MUCHOS A MUCHOS ////////////////////////////////////////
const mongoose = require('mongoose');
const DirectorsNMSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:{
        type:Number,
        min:18,
        maxyear:65
    },
    comments:String,
    pelis:[{type:mongoose.Schema.Types.ObjectId, ref:"pelisM"}]
})

module.exports=mongoose.model("directoresM",DirectorsNMSchema,"DirectorsNM")