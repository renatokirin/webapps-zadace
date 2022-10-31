import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

// npm run devStart

const app = express();
const port = 3000;
app.use(bodyParser.json());

let obavijesti = [];

app.get("/vratiObavijesti", (req, res) => {

    let filtriraneObavijesti = [];
    
    obavijesti.forEach(obavijest => {
        filtriraneObavijesti.push(
            {
                "naziv": obavijest.naziv,
                "datum": obavijest.datum
            }
        );
    });

    res.send(filtriraneObavijesti);
});

app.get("/vratiObavijest/:id", (req, res) => {

    let { id } = req.params;
    let odabranaObavijest = obavijesti.find(obavijest => obavijest.id == id);

    res.send(
        {
            "naziv": odabranaObavijest.naziv,
            "datum": odabranaObavijest.datum,
            "sadrzaj": odabranaObavijest.sadrzaj
        }
    );
});

app.post("/dodajObavijest", (req, res) => {
    let obavijest = req.body;

    obavijest.id = uuidv4();

    let datum = new Date;
    obavijest.datum = datum.toUTCString();

    obavijesti.push(obavijest);

    res.send(obavijest);
});

app.patch("/izmjeniObavijest/:id", (req, res) => {
    let { id } = req.params;

    let odabranaObavijest = obavijesti.find(obavijest => obavijest.id == id);

    let { sadrzaj } = req.body;
    odabranaObavijest.sadrzaj = sadrzaj;

    res.send(odabranaObavijest);
});



app.listen(port, () => console.log(`Works on port ${port}`));