///////////////////////// SCHEMA 1 A 1 ////////////////////////////////////////
const mongoose = require('mongoose');

const PelisSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Pelis",PelisSchema,"Peliculas1-1")