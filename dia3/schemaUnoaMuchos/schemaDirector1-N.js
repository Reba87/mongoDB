///////////////////////// SCHEMA 1 A MUCHOS ////////////////////////////////////////
const mongoose = require('mongoose');
const DirectoresSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:{
        type:Date,
        min:18,
        maxyear:65
    },
    comments:String,
    pelis:[{type:mongoose.Schema.Types.ObjectId, ref:"pelis"}]
})

module.exports=mongoose.model("Directors",DirectoresSchema,"Director1-N")
