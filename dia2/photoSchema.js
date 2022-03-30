const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema ({
    userName:String,
    url:String,
    titulo:{
        type:String,
        validate:[
            function(titulo){
                return titulo != ""
            },
            `El titulo de la foto es necesario`],
            select:false
    },
    description:String
})

module.exports=mongoose.model("Photo",PhotoSchema,"Photo")