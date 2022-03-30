const mongoose = require('mongoose');
let User = require('./userMDB');

mongoose.connect(`mongodb://localhost:27017/codenotch`,
                {useNewUrlParser: false, useUnifiedTopology: false}, (err, db) => {
                    if(err){
                        console.log("ERROR : ", err);
                    } else {
                        console.log("Conexion correcta")
                    }
                })

let userDocument = new User({
    name:"Pilar",
    email:"plameda@gmail.com",
    role:"admin",
    verified:true
})

// userDocument.save(checkRespuesta)

// function checkRespuesta(err, res){
//     if(err){
//         console.log("error: " + err)
//     } else{
//         console.log("Doccumento guardado correctamente")
//         console.log(res)
//     }
// }

const buscarPorId = async () => {
    const user = await User.findById(`6243419aa7af748ab0811129`)
    console.log("El usuario es: ", user)
}

const unCampo = async () => {
    const usercampo = await User.find({}, {"name":1})
    console.log("EL CAMPO ES: ", usercampo)
}



const editarUserID = async () => {
    const put = await User.updateOne(
        {
            _id:"624340df647cf282b0cc3d51"
        },
        {
            verified:false
        }
    )
    console.log("Se ha modificado con exito", put)
}

const borrarUser = async () => {
    const borrar = await User.deleteOne(
    {
        _id:mongoose.Types.ObjectId(`6243419aa7af748ab0811129`)
    }
    )
    console.log("Se ha borrado con exito: ", borrar)
}

borrarUser()