const fs = require("fs")
const path = require("path")
const jsonHeroes = path.join(__dirname,"../data/","heroes.json");
const heroes = JSON.parse(fs.readFileSync(jsonHeroes, 'utf-8'));
const heroController = {
    listar: (req,res) => {
       res.send(heroes)
    },
    detail: (req,res) => {
       let heroe = heroes.filter(heroe => heroe.id == req.params.id);

       if (heroe.length > 0) {
        res.send(heroe[0]);
       } else {
           res.send("No se encontro al Heroe");
       }
    },
    biografia: (req, res) => {
        let heroe = heroes.filter(heroe => heroe.id == req.params.id);

        if (heroe.length > 0) {

         res.send(heroe[0].resenia);

        }
        res.send("No se encontro al Heroe");

    },


}
module.exports = heroController