const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
mongoose.connect(
  "mongodb+srv://omnistack:SemanaFodaParaCaralho@cluster0-acjs5.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// MÉTODOS HTTP: GET, POST, PUT, DELETE
/**
 *
 * TIPOS DE PARAMETROS
 *
 * QUERY PARAMS
 * ROUTE PARAMS
 * BODY
 *
 */
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server UP");
});
