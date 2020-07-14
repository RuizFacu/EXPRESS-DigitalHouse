// requiero express 
const express = require("express");

// ejecuto express
const app = express();

// configuro el puerto
app.listen(3000,() => console.log("Listening on port 3000"))



app.get('/', (req,res) => res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡Nunca pares de creer en ti!."));

// requiero mis rutas de Heroes
const routes = require("./routes/main")

// le digo a la app que use mis rutas
app.use("/heroes",routes)