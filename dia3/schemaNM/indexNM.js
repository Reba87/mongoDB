const mongoose = require("mongoose");
const PelisNMModel = require("./schemaPelisNM");
const DirectorNMModel = require("./schemaDirectorsNM");

mongoose.connect(
    `mongodb://localhost:27017/MUCHOAMUCHO`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
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


// let peli = new PelisNMModel({titulo: "El padrino",duracion: 160,clasificacion_PG: 21,
// comments: "Pelicula de la mafia Italiana",anoLanzamiento: 1972/10/12, directores:[]});

// peli
//     .save()
//     .then((pelicula) => {
//         console.log("Pelicula El padrino guardada");
//         console.log(pelicula);
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     });

// peli = new PelisNMModel({titulo: "Titanic",duracion: 200,clasificacion_PG: 18,
// comments: "Pelicula basada en la historia del titanic",anoLanzamiento: 1997/05/01,directores:[]});
// peli.save()
//     .then((pelicula) => {
//         console.log("Pelicula titanic guardada");
//         console.log(pelicula);
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     });

// peli = new PelisNMModel({titulo: "El señor de los anillos",duracion: 180,clasificacion_PG: 16,
// comments: "primera entrega de una trilogia",anoLanzamiento: 2001,directores:[]});
// peli.save()
//     .then((pelicula) => {
//         console.log("Pelicula El señor de los anillos guardada");
//         console.log(pelicula);
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     });


// let director = new DirectorNMModel({nombre: "Steven",apellido: "Spielberg",
// edad: 60,comments: "uno de los directos mas reconocidos",pelis: ["6245f956224312613f94d410", "6245f956224312613f94d411"]})
// director.save()
//     .then((director)=>{
//             console.log("El director Steven se ha registrado")
//             console.log(director)
//     })
//     .catch((error)=>{
//         console.log("ERROR" + error)
//     })

// director = new DirectorNMModel({nombre: "Martin",apellido: "Scorsese",
// edad: 70,comments: "Nacido en New York",pelis: ["6245f956224312613f94d411", "6245f956224312613f94d412"]})
// director.save()
//     .then((director)=>{
//             console.log("El director Steven se ha registrado")
//             console.log(director)
//     })
//     .catch((error)=>{
//         console.log("ERROR" + error)
//     })

// director = new DirectorNMModel({nombre: "Quentin",apellido: "Tarantino",
// edad: 50,comments: "Nacido en New York",pelis: ["6245f956224312613f94d412", "6245f956224312613f94d410"]})
// director.save()
//     .then((director)=>{
//             console.log("Director, productor, guionista, escritor y editor")
//             console.log(director)
//     })
//     .catch((error)=>{
//         console.log("ERROR" + error)
//     })

    PelisNMModel.updateOne({titulo: "El padrino"}, {directores: ["6245fc492dea11603decb97c", "6245fc492dea11603decb97e"]},checkRespuesta)
    PelisNMModel.updateOne({titulo: "Titanic"}, {directores: ["6245fc492dea11603decb97c", "6245fc492dea11603decb97d"]},checkRespuesta)
    PelisNMModel.updateOne({titulo: "El señor de los anillos"}, {directores: ["6245fc492dea11603decb97d", "6245fc492dea11603decb97e"]},checkRespuesta)