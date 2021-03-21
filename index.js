
//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
app.listen(3000, () => console.log("listening at 3000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({limit:"1mb"}));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter 
//---2.3--- post data and recive data 


app.get('/salamon', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})