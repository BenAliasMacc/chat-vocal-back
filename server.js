const express = require("express");
const app = express();
const OpenAI = require('openai');
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

console.log(process.env.OPENAI_API_KEY)

const configuration = new OpenAI.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAI.OpenAIApi(configuration);
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});