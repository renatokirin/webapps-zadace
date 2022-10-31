import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

// npm run devStart

const app = express();
const port = 3000;
app.use(bodyParser.json());


let autori = [];

app.get("/vratiAutore", (req, res) => {

    let filtriraniAutori = [];

    autori.forEach(autor => {
        filtriraniAutori.push(
            {
                "naziv": autor.naziv,
                "djela": autor.djela
            }
        );
    });

    res.send(filtriraniAutori);
});

// {"naziv": "Marko Markovic", "djela": ["1234", "123456789112345678921"]}
app.post("/dodajAutora", (req, res) => {
    let error = false;
    let autor = req.body;

    if (!autor.naziv || !autor.djela || Object.keys(autor).length != 2) {
        res.send({ "Error": "Krivi kljucevi" });
        error = true;
    }


    autor.djela.forEach(djelo => {
        if (djelo.length > 20) {
            res.send({ "Error": `Djelo ${djelo} ima vise od 20 znakova` });
            error = true;
        }
    });

    if (!error) {
        autor.id = uuidv4();

        let datum = new Date;
        autor.datum = datum.toUTCString();

        autori.push(autor);
        res.send(autor);
    }
});

app.delete("/izbrisiDjeloAutora/:id", (req, res) => {
    let { id } = req.params;

    let odabraniAutor = autori.find(autor => autor.id == id);

    odabraniAutor.djela.pop();

    res.send(odabraniAutor);
});




app.listen(port, () => console.log(`Works on port ${port}`));