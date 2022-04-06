///////////////////////// SCHEMA MUCHOS A MUCHOS ////////////////////////////////////////
const mongoose = require('mongoose');

const PelisNMSchema = new mongoose.Schema({
    titulo:String,
    duracion:Number,
    clasificacion_PG:{
        type:Number,
        min:10,
        max:65
    },
    comments:String,
    director:String,
    añoLanzamiento:Date,  
    directores:[{type:mongoose.Schema.Types.ObjectId, ref:"directoresM"}]
})

module.exports=mongoose.model("pelisM",PelisNMSchema,"PeliculasNM")