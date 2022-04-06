const mongoose = require("mongoose");
const PelisModel = require("./schemaPeli1_1");
const DirectorModel = require("./schemaDirector1-1");

mongoose.connect(
  `mongodb://localhost:27017/UNOAUNO`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) {
      console.log("ERROR : ", err);
    } else {
      console.log("Conexion correcta");
    }
  }
);

function checkRespuesta(err, res) {
  if (err) {
    console.log("error: " + err);
  } else {
    console.log("Documento guardado correctamente");
    console.log(res);
  }
}

let peli = new PelisModel({titulo:"Interestelar",
duracion:134,clasificacion_PG:21,comments:"Pelicula ficcion",
anoLanzamiento:04/03/2016})

peli.save()
  .then((pelicula)=>
{
    console.log("Pelicula guardada con exito")
    console.log(pelicula)
    let director = new DirectorModel({nombre:"Christopher",apellido:"Nolan",edad:34,comments:"La Teoría de la Relatividad", pelis: pelicula._id})
    return director.save();
})
.then((directo)=>
{
    console.log("Director guardado")
    console.log(directo)
})
.catch((error)=>
{
    console.log("Error: " + error);
})

///////////////////////////////////////BUSCANDO UNO POR NOMBRE///////////////////////////////////////////////

DirectorModel.findOne({nombre:"Pedro"})
    .populate("pelis")
    .then((Director) =>
    {
        console.log(`"El direcctor ${Director.nombre} tiene la pelicula llamada ${Director.pelis.titulo}`)
        console.log(Director)
    })
    .catch((err) => {
        console.log("Error", err)
    })

    DirectorModel.findOne({nombre:"Christopher"})
    .populate("pelis")
    .then((Director) =>
    {
        console.log(`"El direcctor ${Director.nombre} tiene la pelicula llamada ${Director.pelis.titulo}`)
        console.log(Director)
    })
    .catch((err) => {
        console.log("Error", err)
    })