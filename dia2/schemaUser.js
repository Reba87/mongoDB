const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    surname:String,
    age:{
        type:Date,
        min:18,
        maxyear:65
    },
    comments:String,
    rol:{
            type:String,
            enum: ["admin","user"]
        },
        password:{
            type:String,
            verified: [
                function(password){
                    return password.length >=8
                },
                `La contraseña debe ser mas larga`],
                select:false            
        },
        email:String,
        phone:Number,
        address:String,
        follow:String
   
})

UserSchema.pre(`save`, function(next) {
    console.log("Middleware de entradas");
    if (this.age >= 21 ){
        console.log("Usuario mayor de 21 años")
        next();
    } else{
        console.log("La edad debe ser mayor de 21 años")
    }
})
module.exports=mongoose.model("User",UserSchema,"Usuarios")