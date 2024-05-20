import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("OK");
});

const carros = [
    {
        id: 1,
        marca: "FIAT",
        nome : "Uno"
    },
    {
        id: 2,
        marca: "Honda",
        nome: "Fit"
    },
    {
        id: 3,
        marca: "BMW",
        nome: "Z4"
    },
];

app.get("/carros", (req, res) => {
    res.status(200).json(carros);
});

app.post("/carros", (req, res) => {
    carros.push(req.body);
    res.status(201).send("Cadastro com sucesso!");
});

export default app;