///////////////////////// SCHEMA 1 A 1 ////////////////////////////////////////
const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:{
        type:Date,
        min:18,
        maxyear:65
    },
    comments:String,
    pelis:{type:mongoose.Schema.Types.ObjectId, ref:"Pelis"}
})

module.exports=mongoose.model("Director",DirectorSchema,"Director1-1")