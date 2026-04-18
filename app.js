const express = require('express');
const cors = require('cors');
const app = express();

//Middleware to parse requests
app.use(express.json());
app.use(cors())

const port = 3000;

//Homepage, display JSON Bateman
app.get("/", (_, res) => {
  res.send({
    name: "Jason Kent Bateman",
    birthday: "14 January 1969",
    birthplace: "Rye, New York",
    nationality: "American",
    ethnicity: "White",
    zodiac: "Capricorn",
    height: "5ft 11in",
    weight: "167.5lbs",
  });
});


app.get("/teapot", (_, res) => {
  res.status(418);
  res.set("X-tea-preference", "Earl Gray");
  res.send("teapot?? Are you a British Chap??");
});

app.listen(port, () => console.log(`JSON_B running on port: ${port}`));
