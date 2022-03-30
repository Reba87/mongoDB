const mongoose = require('mongoose');
let User = require('./schemaUser');
let Photo = require('./photoSchema')

mongoose.connect(`mongodb://localhost:27017/Usuarios`,
                {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
                    if(err){
                        console.log("ERROR : ", err);
                    } else {
                        console.log("Conexion correcta")
                    }
                })


/////////////////////////////////////////////// USUARIO///////////////////////////////
let data = 
{   name:"Alonso",
    surname:"Alvarez",
    age:23,
    comments:"primer usuario registrado",
    rol:"admin",
    password:"preas1568",
    email:"alvarezalo@gmail.com",
    phone:5544785,
    address:"calle alcala"
}
let document = new User(data);



function checkRespuesta(err, res){
    if(err){
        console.log("error: " + err)
    } else{
        console.log("Documento guardado correctamente")
        console.log(res)
    }
}
// User.create(document, checkRespuesta);

data =
{name:"Andrea",
surname:"Molina",
age:45,
comments:"me registro por primera vez",
rol:"user",
password:"adrrd5154",
email:"andreaM@gmail.com",
phone:635589841,
address:"calle teresa",
follow:"Aquiles"

}
let document1 = new User(data);
// User.create(document1, checkRespuesta);



/////////////////////////// PHOTO//////////////////////////////////
let photo = 
{   userName:"Paquito",
    url:"https://cdn.pixabay.com/photo/2017/04/22/19/36/girl-2252145__340.jpg",
    titulo:"felicidad",
    description:"Niña sonriendo"
}
let img = new Photo(photo);

// Photo.create(img, checkRespuesta);

//////////////////////////////////// CONTROLADORES////////////////////////////////////////////////

const buscarFoto = async () => {
    const fotos = await Photo.find({userName:"Carlos"})
    console.log("Las fotos son: ", fotos)
}


const follow = async () => {
    const put = await User.updateOne(
        {
            _id:"62441624f89e4bf688ac54a4"
        },
        {
            follow:"Aquiles"
        }
    )
    console.log("Se ha modificado con exito", put)
}

const unFollow = async () => {
    const put = await User.updateOne(
        {
            _id:"62441e160cc040bf27a45c52"
        },
        {
            follow:""
        }
    )
    console.log("Se ha modificado con exito", put)
}

const borrarPhoto = async () => {
    const borrar = await Photo.deleteOne(
    {
        userName:"Carlos"
    }
    )
    console.log("Se ha borrado con exito: ", borrar)
}



const borrarAllPhoto = async () => {
    const borrar = await Photo.deleteMany(
    {
        userName:"carla"
    }
    )
    console.log("Se ha borrado con exito: ", borrar)
}

borrarAllPhoto()