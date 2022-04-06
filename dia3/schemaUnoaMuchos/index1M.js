const mongoose = require("mongoose");
const Pelis1NModel = require("./schemaPelis1-N");
const Director1NModel = require("./schemaDirector1-N");

mongoose.connect(
  `mongodb://localhost:27017/UNOAMUCHO`,
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

let biblioteca = [];
let peli = new Pelis1NModel({titulo:"El padrino",duracion:160,clasificacion_PG:21,
comments:"Pelicula de la mafia Italiana",anoLanzamiento:1972})

peli.save()
    .then((pelicula) => {
        console.log("Peli el padridno guardada")
        biblioteca.push(pelicula._id)
        peli = new Pelis1NModel({titulo:"Titanic",duracion:200,
        clasificacion_PG:18,comments:"Pelicula basada en la historia del titanic",anoLanzamiento:1997})
        return peli.save()

    })
    .then((pelicula) => {
        console.log("Peli Titanic guardada")
        biblioteca.push(pelicula._id)
        peli= new Pelis1NModel({titulo:"El señor de los anillos",duracion:180,
        clasificacion_PG:16,comments:"primera entrega de una trilogia",anoLanzamiento:2001})
        return peli.save()
    })
    .then((pelicula) => {
        console.log("Peli el señor de los anillos guardada")
        biblioteca.push(pelicula._id)
        let director = new Director1NModel ({nombre:"Steven",apellido:"Spielberg",
        edad:60,comments:"uno de los directos mas reconocidos", pelis: biblioteca})
        return director.save()
    })
    .then((director)=>{
        console.log("Autor guardado con exito")
        console.log(director)
        console.log(biblioteca)
    })
    .catch((error)=>{
        console.log("Error: " + error)
    })


///////////////////////////////////////BUSQUEDA////////////////////////////////////////////////////////

    Director1NModel.findOne({nombre:"Steven"})
        .populate(`pelis`)
        .then((director)=>{
            console.log(`El director ${director.nombre} tiene ${director.pelis.length} peliculas`)
            console.log(
            "La primera pelicula es " + director.pelis[0].titulo,
            "La segunda pelicula es " + director.pelis[1].titulo,
            "La tercera pelicula es " + director.pelis[2].titulo )
            console.log(director)
        })
        .catch((err) => {
            console.log("Error" , err)
            
        })