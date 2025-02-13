const express = require("express")
const app  = express()
require('dotenv').config();
const uri = process.env.uri;
const mongoose = require("mongoose");
const port = 3010;
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});


mongoose.connect(uri)
.then(()=>{
    console.log(` Connected to database`)
})
.catch((err)=>{
    console.log("Error:",err);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });