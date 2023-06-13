const express = require("express");
const router = require("./app/route/homepage");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.set("view engine", "ejs");

app.use(router)
app.listen(3000, ( ) => {
  console.log('connected')
})

module.exports =  app;