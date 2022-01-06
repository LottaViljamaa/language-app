require("dotenv").config();
const pool = require("./database/crudrepository.js")
const express = require("express");
const app = express();
let languageApp = express.Router();
let unexpectedErr = ("Something went wrong");

const listener = app.listen(8080, () => {
  console.log(`Listening on port ${listener.address().port}`)
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());


app.use('/languageApp', languageApp);

//HAE KAIKKI SIJAINNIT
languageApp.get('/', async (req, res) => {
  let result = await pool.findAll();
  res.send(result);
}); 

//HAE TIETTY ID
languageApp.get('/:id([0-9]+)', async (req, res) => {
  let id = req.params.id;
  let result2 = await pool.findById(id);
  if (result2.length === 0) {
    res.send("msg: could not find resource with tag = " + id);
  } else { 
    res.send(result2);
  }
});

//POISTA TIETTY ID
//TODO: virheidenkäsittely
languageApp.delete('/:id([0-9]+)', async (req, res) => {
  let id = req.params.id;
  let result = await pool.deleteById(id);
  res.status(201).send({
    msg: result, 
  });
});

//LISÄÄ UUSI SIJAINTI
languageApp.post('/', async (req, res) => {
  try {
    const idSchema = {
      type: "object",
      properties: {
        english: { type: "string"},
        finnish: { type: "string"},
      },
    };
  const validation = validator.validate(req.body, idSchema);
  if (validation.errors.length > 0) {
    res.status(400).send(validation.errors);
  } else {
    let result = await pool.save(
      req.body.tag, 
      req.body.english, 
      req.body.finnish
    );
    res.status(201).send({
      msg: result,
    });
  }
} catch {
    res.status(500).send({
      msg: unexpectedErr,
    });
  }
});