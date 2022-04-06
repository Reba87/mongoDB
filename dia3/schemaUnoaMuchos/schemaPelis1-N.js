///////////////////////// SCHEMA 1 A MUCHOS ////////////////////////////////////////
const mongoose = require('mongoose');

const PelisMSchema = new mongoose.Schema({
    titulo:String,
    duracion:Number,
    clasificacion_PG:{
        type:Number,
        min:10,
        max:65
    },
    comments:String,
    anoLanzamiento:Date  
})

module.exports=mongoose.model("pelis",PelisMSchema,"Peliculas1-N")